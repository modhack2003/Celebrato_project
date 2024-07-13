import React, { useState, useEffect } from 'react';
import img1 from '../assets/andreas-ronningen-S2YssLw97l4-unsplash 1.png';
import img2 from '../assets/marc-babin-aQWmCH_b3MU-unsplash 2.png';
import img3 from '../assets/stella-de-smit-sFHlUfyc23M-unsplash 1.png';
import arrow from '../assets/Arrow 3.png';

const Carousel = () => {
  const images = [
    {
      url: img1,
      alt: 'Image 1',
      caption: 'Now you can plan your wedding with zero hassle',
      link: '#',
    },
    {
      url: img2,
      alt: 'Image 2',
      caption: 'Make your wedding memorable',
      link: '#',
    },
    {
      url: img3,
      alt: 'Image 3',
      caption: 'Enjoy every moment',
      link: '#',
    },
  ];

  const length = images.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [length]);

  useEffect(() => {
    setPrevIndex((currentIndex - 1 + length) % length);
    setNextIndex((currentIndex + 1) % length);
  }, [currentIndex, length]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[70vh] my-10  bg-white md:my-10 overflow-hidden">
      <div className="w-full relative  h-full  flex items-center justify-center overflow-hidden">
        <div className="hidden md:block relative w-1/5 h-[90%] flex-shrink-0 transition-all duration-500 ease-in-out">
          <img src={images[prevIndex].url} alt={images[prevIndex].alt} className="w-full h-full object-cover rounded-l-xl" />
        </div>
        <div className="relative w-full md:w-3/5 h-[90%] flex-shrink-0 transition-all duration-500 ease-in-out">
          <img src={images[currentIndex].url} alt={images[currentIndex].alt} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 text-white p-4 h-[25%] md:h-[30%] py-4 px-6 md:py-6 md:px-10 text-start">
            <h2 className="text-lg md:text-xl lg:text-2xl font-body mb-2 md:mb-4">{images[currentIndex].caption}</h2>
            <a href={images[currentIndex].link} className="text-base md:text-lg flex items-center justify-start">
              <img src={arrow} alt="" className="mr-2 md:mr-4" />
              Explore
            </a>
          </div>
        </div>
        <div className="hidden md:block relative w-1/5 h-[90%] flex-shrink-0 transition-all duration-500 ease-in-out">
          <img src={images[nextIndex].url} alt={images[nextIndex].alt} className="w-full h-full object-cover rounded-r-xl" />
        </div>
      </div>
      <div className="absolute top-7 bottom-0 left-0 w-[22%] h-[90%] bg-gradient-to-r from-black to-transparent z-10 hidden md:block" />
      <div className="absolute top-7 bottom-0 right-0 w-[22%] h-[90%] bg-gradient-to-l from-black to-transparent z-10 hidden md:block" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-primary-blue' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
