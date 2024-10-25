import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const images = [
  { id: 1, src: 'c11.jpg', alt: 'Image 1' },
  { id: 2, src: 'c2.jpg', alt: 'Image 2' },
  { id: 3, src: 'c3.jpg', alt: 'Image 3' },
  { id: 4, src: 'c1.jpg', alt: 'Image 3' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>Prev</button>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={image.id} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className="next" onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
