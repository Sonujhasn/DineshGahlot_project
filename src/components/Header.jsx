import React, { useState } from "react";

const HeaderSlider = () => {
  const images = [
    'https://images-pw.pixieset.com/sample_photos/theme_8_c5c72c66_XL.jpg',
    'https://images.squarespace-cdn.com/content/v1/561bafade4b058853be79dd9/1617716446665-A2MVN6GDAF4DC66PJ6EE/Outstanding-Videographer-Squarespace-Sites-blog.jpg?format=1500w',
    'https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.jpg?s=2048x2048&w=is&k=20&c=EuGEc48jXwqDQRdkC_XVmK1xo8-VnXaZoSmIgsJkUCQ=',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const onDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="home" className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images[activeIndex]})` }}>
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Navigation arrows */}
      <button
        onClick={slidePrev}
        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-2 rounded"
      >
        &larr; {/* Left arrow */}
      </button>

      <button
        onClick={slideNext}
        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-2 rounded"
      >
        &rarr; {/* Right arrow */}
      </button>

      {/* Dot indicators */}
      <div className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => onDotClick(index)}
          ></button>
        ))}
      </div>

      {/* Fixed header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-50 flex justify-between items-center p-4 text-white backdrop-blur-lg">
        <div className="logo">
          <h1 className="text-2xl font-bold">DINESHGAHLOT.COM</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:underline">HOME</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">PORTFOLIO</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">ABOUT</a>
            </li>
            <li>
              <a href="#testimonial" className="hover:underline">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="relative flex justify-center items-center h-full text-center text-white">
        <div className="hero-text flex flex-col space-y-2">
          <h2 className="text-4xl">Photography For</h2>
          <h2 className="text-4xl">Adventurous Souls & Rebels At Heart</h2>
          <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
