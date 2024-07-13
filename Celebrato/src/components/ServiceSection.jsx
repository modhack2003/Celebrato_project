import React, { useState, useEffect } from 'react';
import img1 from '../assets/marc-babin-aQWmCH_b3MU-unsplash 2.png';
import img2 from '../assets/kyle-head-WE-N1KDqEno-unsplash 1.png';
import img3 from '../assets/campaign-creators-gMsnXqILjp4-unsplash 1.png';
import img4 from '../assets/aleksandr-popov-9vDdkxSCAD4-unsplash 1.png';

const services = [
  {
    imageUrl: img1,
    title: 'Wedding Planning',
    description: 'Create the wedding of your dreams with our comprehensive planning tools.',
  },
  {
    imageUrl: img2,
    title: 'Birthday Parties',
    description: 'Plan memorable birthday parties with fun themes and activities.',
  },
  {
    imageUrl: img3,
    title: 'Corporate Events',
    description: 'Organize seamless corporate events with professional management tools.',
  },
  {
    imageUrl: img4,
    title: 'Private Parties',
    description: 'Host amazing private parties with ease and style.',
  },
];

const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col bg-white rounded-[14px] shadow-md overflow-hidden relative font-body w-full sm:w-[278px] h-[388px] mx-auto mb-8 p-2">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-[14px]"
      />
      <div className="p-6 pl-4 pt-4 text-start">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <button className="absolute bottom-0 right-0 bg-btn-bl2 w-24 h-16 flex items-center justify-center ellipsis-button-custom">
        <div className="flex pl-6 space-x-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
        </div>
      </button>
    </div>
  );
};

const ServiceSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call the function initially to set the state based on the current viewport size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === services.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 font-body mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-20">OUR <span className='text-primary-blue'>SERVICES</span></h2>
        
        {isMobile ? (
          <div className="relative">
            <div className="flex overflow-hidden w-full justify-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`min-w-full transition-transform duration-300 ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>

            <div className="absolute buttom-0 right-10 transform-translate-y-1/2 flex justify-between w-[22vh] px-4">
              <button onClick={goToPrevious} className="bg-gray-200 p-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={goToNext} className="bg-btn-bl2 p-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-start ml-8 mt-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 mx-1  my-4 rounded-full ${index === currentIndex ? 'bg-primary-blue' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
