import React from "react";

const About = () => {
  // Array of image URLs
  const images = [
    'https://images-pw.pixieset.com/sample_photos/theme_8_eb3507d5_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_bf3a9b7b_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_8e230052_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_21bd6f3b_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_5d6a1108_LG.jpg',
    'https://images-pw.pixieset.com/sample_photos/theme_8_7171971e_LG.jpg'
  ];

  return (
    <div id="about" className="container mx-auto px-2 py-5">
      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-1">
        {images.map((src, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={src} alt={`Image ${index}`} className="w-80 h-80 rounded-md object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
