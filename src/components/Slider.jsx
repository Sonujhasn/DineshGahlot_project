import React, { useState } from 'react';

const Slider = () => {
  const images = [
    'https://images-pw.pixieset.com/sample_photos/theme_8_eb3507d5_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_bf3a9b7b_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_8e230052_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_21bd6f3b_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_5d6a1108_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_7171971e_LG.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='flex flex-col items-center w-[50rem] m-auto'>
      {/* Image Slider */}
      <div
        className='w-full h-[40rem] bg-cover bg-center'
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Navigation Controls */}
      <div className='flex items-center justify-between w-full px-6 py-4'>
        <button
          className='bg-gray-800 text-white p-2 rounded ml-48'
          onClick={slidePrev}
        >
          &larr; {/* Left arrow */}
        </button>

        {/* Dot indicators */}
        <div className='flex space-x-2'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        <button
          className='bg-gray-800 text-white p-2 rounded mr-48'
          onClick={slideNext}
        >
          &rarr; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default Slider;
