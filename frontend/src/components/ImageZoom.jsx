import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

/**
 * ImageZoom – wraps any <img> with:
 *   • hover scale + zoom-in icon overlay
 *   • click → full-screen lightbox with smooth spring animation
 *   • Escape / click-backdrop to close
 */
export default function ImageZoom({ src, alt, className = "", style = {}, wrapperClassName = "", wrapperStyle = {} }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape key
  React.useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <>
      {/* Thumbnail wrapper */}
      <motion.div
        className={`relative overflow-hidden cursor-zoom-in group ${wrapperClassName}`}
        style={wrapperStyle}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className={className}
          style={style}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.07 }}
        />
        {/* Hover overlay with zoom icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
          initial={false}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl transition-opacity duration-300"
          >
            <ZoomIn size={22} className="text-gray-800" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors z-10"
              onClick={close}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
            >
              <X size={22} />
            </motion.button>

            {/* Zoomed image */}
            <motion.img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain cursor-default"
              initial={{ opacity: 0, scale: 0.75, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
