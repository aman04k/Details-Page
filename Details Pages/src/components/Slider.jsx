import React, { useState, useEffect } from "react";
import "../App.css";

const Slider = () => {
  const images = [
    "https://wallpaperaccess.com/full/465874.jpg",
    "https://i.pinimg.com/originals/92/66/a5/9266a5fd349d324fe198d59886c787d7.jpg",
    "https://petapixel.com/assets/uploads/2018/04/gettyimagesfeat.jpg",
    "https://ichef.bbci.co.uk/images/ic/1200xn/p0bvgbs6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  return (
    <div className="slider-container">
      {/* Profile Overlay */}
      <div className="profile-overlay">
        <img
          src="https://th.bing.com/th?id=OIP._c8UwkSLfSOtw14zgZs7LAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Profile"
          className="profile-image"
        />
        <p className="profile-name">John Doe</p>
      </div>

      {/* Slider */}
      <div
        className="slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="image"
        />
      </div>

      {/* Navigation Buttons */}
      <button className="previous-button" onClick={handlePrevious}>
        &#60;
      </button>
      <button className="next-button" onClick={handleNext}>
        &#62;
      </button>
    </div>
  );
};

export default Slider;
