import React, { useEffect, useRef } from "react";
import "../../Styles/Gallery.css";
import gallery1 from "../assets/jagganath-temple.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";

const galleryData = [
  {
    id: 1,
    title: "Jagannath Rath Yatra",
    description:
      "An annual chariot festival in Puri, Odisha, dedicated to Lord Jagannath, Balabhadra, and Subhadra.\n\nहर साल पुरी, ओडिशा में आयोजित होने वाला एक रथ यात्रा महोत्सव जो भगवान जगन्नाथ, बलभद्र और सुभद्राजी को समर्पित है।",
    imageUrl: gallery1,
  },
  {
    id: 2,
    title: "Main Temple View",
    description:
      "The sacred Jagannath Temple complex, known for its stunning architecture and spiritual energy.\n\nपवित्र जगन्नाथ मंदिर परिसर अपनी भव्य वास्तुकला और आध्यात्मिक ऊर्जा के लिए प्रसिद्ध है।",
    imageUrl: gallery2,
  },
  {
    id: 3,
    title: "Sandhya Aarti",
    description:
      "Evening Aarti is a divine ritual performed daily with chants and music reverberating across the temple.\n\nसंध्या आरती एक दिव्य अनुष्ठान है जिसमें मंत्रोच्चार और संगीत की ध्वनि मंदिर परिसर में गूंजती है।",
    imageUrl: gallery3,
  },
  {
    id: 4,
    title: "Devotees Gathering",
    description:
      "Pilgrims from all over the world gather to seek blessings and witness the temple's grandeur.\n\nदुनिया भर से श्रद्धालु मंदिर की भव्यता देखने और आशीर्वाद पाने के लिए एकत्र होते हैं।",
    imageUrl: gallery4,
  },
];

const GalleryPage = () => {
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    rowsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="temple-gallery-title">Jagannath Temple Gallery</h1>
      {galleryData.map((item, index) => (
        <div
          key={item.id}
          className={`gallery-row ${index % 2 !== 0 ? "even" : ""}`}
          ref={(el) => (rowsRef.current[index] = el)}
        >
          <div className="gallery-content">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="gallery-image"
            />
            <div className="gallery-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button
                className="donate-button"
                onClick={() => (window.location.href = "/donate")}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
