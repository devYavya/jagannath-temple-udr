import React from "react";
import { motion } from "framer-motion";

// Gallery images
import galleryImage1 from "../assets/gallery1.jpg";
import galleryImage2 from "../assets/gallery2.jpg";
import galleryImage3 from "../assets/gallery3.jpg";
import galleryImage4 from "../assets/gallery4.jpg";

// Animation variants
const galleryContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const galleryImageVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const GallerySection = () => {
  return (
    <motion.div
      className="image-gallery"
      variants={galleryContainer}
      initial="hidden"
      animate="show"
    >
      <h2 className="gallery-title">Temple Gallery</h2>
      <motion.div className="gallery-grid">
        <motion.img
          variants={galleryImageVariant}
          src={galleryImage1}
          alt="Temple Image 1"
          className="gallery-image"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          variants={galleryImageVariant}
          src={galleryImage2}
          alt="Temple Image 2"
          className="gallery-image"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          variants={galleryImageVariant}
          src={galleryImage3}
          alt="Temple Image 3"
          className="gallery-image"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          variants={galleryImageVariant}
          src={galleryImage4}
          alt="Temple Image 4"
          className="gallery-image"
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default GallerySection;
