import React, { useState, useEffect } from "react";
import image1 from '../styles/img/image1.jpg';
import image2 from '../styles/img/image2.jpg';
import image3 from '../styles/img/image3.jpg';
import image4 from '../styles/img/image4.jpg';
import image5 from '../styles/img/image5.jpg';

const photos = [
  { id: 1, src: image1, title: "Photo 1", description: "Description for Photo 1" },
  { id: 2, src: image2, title: "Photo 2", description: "Description for Photo 2" },
  { id: 3, src: image3, title: "Photo 3", description: "Description for Photo 3" },
  { id: 4, src: image4, title: "Photo 4", description: "Description for Photo 4" },
  { id: 5, src: image5, title: "Photo 5", description: "Description for Photo 5" },
];

const Slider = ({ className }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const currentPhoto = photos[currentIndex];

  return (
    <div
      className={`slider-container ${className} flex flex-col bg-black text-white p-5`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <main className="flex flex-1 mt-5 relative">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-5xl h-[250px] xs:h-[350px] md:h-[500px] bg-gray-800 flex items-center justify-center relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${photos.length * 100}%`,
              }}
            >
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="flex-shrink-0 w-full h-full"
                  style={{ flexBasis: "100%" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons and Text Section */}
          <div className="flex items-center justify-center w-full mt-4 px-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 mx-4"
            >
              <span className="text-black text-xl font-bold">&lt;</span>
            </button>
            <p className="text-center text-white text-sm xs:text-base md:text-lg mx-4">
              Небольшая коллекция моих работ
            </p>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 mx-4"
            >
              <span className="text-black text-xl font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slider;
