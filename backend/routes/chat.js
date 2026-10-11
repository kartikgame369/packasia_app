const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Rate limiter: 25 requests per 15 minutes per IP to prevent financial & quota exhaustion
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many chat requests from this IP. Please wait before trying again.' },
});

const SYSTEM_PROMPT = `You are "Aria", the friendly and knowledgeable AI customer support assistant for Packasia — a leading industrial packaging manufacturer based in India.

Your job is to assist customers with product inquiries, quotes, company info, and general support. Always be warm, concise, and professional.

COMPANY INFORMATION:
Company Name: Packasia
Tagline: "The Strength Behind Every Shipment"
Industry: Industrial Packaging Manufacturing

Address: Packasia Manufacturing Unit, Industrial Area, India
Phone / WhatsApp: +91 98765 43210
Email: support@packasia.com
Website: www.packasia.com
Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM IST

PRODUCTS:
1. CORRUGATED BOXES
   - Single Wall (3-ply): Lightweight, ideal for e-commerce and retail
   - Double Wall (5-ply): Medium-duty, suited for electronics and FMCG
   - Triple Wall (7-ply): Heavy-duty industrial use, max load capacity
   - All boxes: FSC certified, 100% recyclable, custom sizes and print available

2. PAPER BAGS
   - Parcel Paper Bags: Heavy-duty kraft, food-grade certified, block-bottom design, holds up to 15kg
   - Shopping Paper Bags: Premium twisted/flat handle, excellent printability, custom branding
   - All bags: Eco-friendly, biodegradable, custom printing up to 4 colors

KEY DETAILS:
- ISO certified manufacturing
- Minimum Order Quantity (MOQ): 500 units
- Delivery: Pan-India, 7 to 14 business days
- Custom printing, sizing, and branding available
- Bulk discounts available for orders above 5000 units
- Free sample available on request

YOUR INSTRUCTIONS:
- If someone asks for a quote, ask them: product type, quantity, size requirements, and printing needs.
- If someone asks for contact info, share: Phone +91 98765 43210, Email support@packasia.com, and address.
- If someone asks about delivery, explain 7 to 14 days pan-India.
- If someone asks for a sample, tell them free samples are available and they just need to share their shipping address and mobile number.
- Keep responses short (2 to 4 sentences max) unless the user asks for detailed info.
- NEVER make up pricing. Say "Our sales team will share a custom quote based on your requirements."
- If you cannot answer, say "Let me connect you with our team at +91 98765 43210 or support@packasia.com"`;

router.post('/', chatLimiter, async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Security bounds: Prevent token exhaustion or memory DoS
    if (messages.length > 20) {
      return res.status(400).json({ error: 'Message history limit exceeded (max 20 messages)' });
    }

    const apiKey = process.env.AI_KEY;
    if (!apiKey) {
      console.error('AI_KEY is not configured in server environment');
      return res.status(503).json({ error: 'Chat assistant is temporarily unavailable' });
    }

    // Format and sanitize messages, limiting text length per message
    const messagesFormatted = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
        .filter((msg) => msg && typeof msg.text === 'string' && msg.text.trim())
        .map((msg) => ({
          role: msg.role === 'model' || msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.text.trim().slice(0, 1000), // Bound character length
        })),
    ];

    const response = await fetch('https://co.agentrouter.org/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messagesFormatted,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error('Upstream AI response error status:', response.status);
      return res.status(502).json({ error: 'Unable to process chat request at this time' });
    }

    const botText = data.choices?.[0]?.message?.content || 'Thank you for contacting Packasia! How else can I help?';
    res.json({ reply: botText });

  } catch (error) {
    console.error('Chat route error:', error.message);
    res.status(500).json({ error: 'Internal server error while processing chat' });
  }
});

module.exports = router;
