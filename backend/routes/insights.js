const express = require("express");
const router = express.Router();

// Static articles data — no DB required for read-only content
const articles = [
  { id: "a1", category: "Innovation", date: "Oct 12, 2024", title: "Advancements in Flute Engineering for Heavy Duty Transit", excerpt: "How re-engineering the microscopic structure of corrugated flutes is increasing stacking strength by 40% while using less raw material.", readTime: "5 min read" },
  { id: "a2", category: "Sustainability", date: "Oct 05, 2024", title: "The Lifecycle of a Compostable Paper Bag", excerpt: "Tracking the journey from sustainably managed forests to your doorstep, and finally back to the earth in 90 days.", readTime: "4 min read" },
  { id: "a3", category: "Company Updates", date: "Sep 28, 2024", title: "Packasia Opens New LEED-Certified Facility in Rayong", excerpt: "Our newest manufacturing hub increases production capacity by 30% while reducing overall carbon emissions through localized energy generation.", readTime: "3 min read" },
  { id: "a4", category: "Case Studies", date: "Sep 15, 2024", title: "How a Global E-Commerce Brand Cut Packaging Costs by 22%", excerpt: "A deep dive into the structural redesign that helped a top-100 e-commerce company reduce damage rates and packaging costs simultaneously.", readTime: "6 min read" },
  { id: "a5", category: "Innovation", date: "Sep 02, 2024", title: "Water-Based Inks: The Next Frontier in Eco-Printing", excerpt: "We explore the chemistry behind water-based flexographic inks and why they are set to replace solvent-based alternatives across the industry.", readTime: "4 min read" },
  { id: "a6", category: "Sustainability", date: "Aug 20, 2024", title: "Beyond Carbon Neutral: Packasia Regenerative Roadmap", excerpt: "Our updated sustainability report outlines how we plan to move beyond net-zero and actively restore forest ecosystems by 2030.", readTime: "7 min read" },
];

// GET /api/insights - list articles (with optional ?category= filter)
router.get("/", (req, res) => {
  const { category, limit = 10, page = 1 } = req.query;
  let result = articles;
  if (category && category !== "All") {
    result = articles.filter((a) => a.category === category);
  }
  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + parseInt(limit));
  res.json({ success: true, count: result.length, data: paginated });
});

// GET /api/insights/:id - single article
router.get("/:id", (req, res) => {
  const article = articles.find((a) => a.id === req.params.id);
  if (!article) return res.status(404).json({ success: false, message: "Article not found" });
  res.json({ success: true, data: article });
});

// POST /api/insights/subscribe - newsletter subscription
router.post("/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email is required" });
  // In production, save to DB or send to email service
  console.log(`Newsletter subscription: ${email}`);
  res.json({ success: true, message: "Subscribed successfully" });
});

module.exports = router;
