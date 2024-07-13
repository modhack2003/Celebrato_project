import React, { useState } from 'react';
import menu from '../assets/Frame 14341.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 w-full bg-white shadow-lg shadow-black-500/50 z-50">
       
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
      <div className="md:hidden justify-items-start">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
           <img src={menu} alt=""  />
          </button>
        </div>
        <div className="md:hidden flex-1 flex justify-center">
          <span className="text-3xl font-bold text-black font-ICON">
            Cele<span className="text-primary-blue">brato</span>
          </span>
        </div>
     
        <div className="hidden md:flex items-center  font-ICON">
          <span className="text-3xl font-bold text-black">
            Cele<span className="text-primary-blue">brato</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-body font-semibold text-lg">
          <a href="#" className="text-black hover:text-blue-500">Home</a>
          <a href="#" className="text-black hover:text-blue-500">About Us</a>
          <a href="#" className="text-black hover:text-blue-500">Events</a>
          <a href="#" className="text-black hover:text-blue-500">FAQ</a>
          <a href="#" className="text-black hover:text-blue-500">Contact</a>
        </div>
        <div className="hidden md:block">
          <button className="bg-btn-bl text-white px-6 py-2 rounded-lg hover:bg-gray-900 w-[146px]">Login</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start px-6 py-4 space-y-4 font-body font-semibold text-lg">
            <a href="#" className="text-black hover:text-blue-500">Home</a>
            <a href="#" className="text-black hover:text-blue-500">About Us</a>
            <a href="#" className="text-black hover:text-blue-500">Events</a>
            <a href="#" className="text-black hover:text-blue-500">FAQ</a>
            <a href="#" className="text-black hover:text-blue-500">Contact</a>
            <button className="bg-btn-bl text-white px-6 py-2 rounded-lg hover:bg-gray-900 w-full">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
