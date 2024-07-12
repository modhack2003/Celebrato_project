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

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  const getPrevIndex = (index) => (index - 1 + length) % length;
  const getNextIndex = (index) => (index + 1) % length;

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);
  console.log(prevIndex);
  console.log(currentIndex);
  console.log(nextIndex);

  return (
    <div className="relative flex flex-col justify-center items-center h-[70vh] bg-white overflow-hidden">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="absolute w-[150%] h-full flex transition-transform duration-500" style={{ transform: `translateX(-${(100 / 3)}%)` }}>
          <div className="relative w-[33.33%] flex-shrink-0 mx-0">
            <img src={images[prevIndex].url} alt={images[prevIndex].alt} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="relative w-[33.33%] flex-shrink-0 mx-0">
            <img src={images[currentIndex].url} alt={images[currentIndex].alt} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{images[currentIndex].caption}</h2>
              <a href={images[currentIndex].link} className="text-lg md:text-xl px-4 py-2 flex items-center justify-center">
                <img src={arrow} alt="" className="mr-4" />
                Explore
              </a>
            </div>
          </div>
          <div className="relative w-[33.33%] flex-shrink-0 mx-0">
            <img src={images[nextIndex].url} alt={images[nextIndex].alt} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-[20%] bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-[20%] bg-gradient-to-l from-black to-transparent z-10" />
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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
