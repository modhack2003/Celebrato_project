import React, { useState } from 'react';
import fa from "../assets/Facebook.png";
import wa from "../assets/WhatsApp.png";
import ig from "../assets/Instagram.png";
import { IoIosArrowForward , IoIosArrowDown } from "react-icons/io";



const Footer = () => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showSupportLinks, setShowSupportLinks] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);



  return (
    <div className="bg-black text-white py-12 font-body">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-ICON mb-4">
            Cele<span className="text-primary-blue">brato</span>
          </h2>
          <div className="text-sm">
            <p className="text-lg mb-2 font-semibold">Contact Information:</p>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="md:hidden mb-8 pb-2 px-4 border-0 border-b-2 ">
          <button onClick={() => setShowQuickLinks(!showQuickLinks)} className="text-lg font-bold flex justify-between w-full">
            Quick Links <span>{showQuickLinks ? <IoIosArrowDown />: <IoIosArrowForward /> }</span>
          </button>
          {showQuickLinks && (
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-primary-blue">Home</a></li>
              <li><a href="#" className="hover:text-primary-blue">Browse Events</a></li>
              <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
              <li><a href="#" className="hover:text-primary-blue">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-blue">FAQ</a></li>
            </ul>
          )}
        </div>
        <div className="md:hidden mb-8 pb-2 px-4 border-0 border-b-2 ">
          <button onClick={() => setShowSupportLinks(!showSupportLinks)} className="text-lg font-bold flex justify-between w-full">
            Support Links <span>{showSupportLinks ? <IoIosArrowDown />: <IoIosArrowForward /> }</span>
          </button>
          {showSupportLinks && (
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-primary-blue">Home</a></li>
              <li><a href="#" className="hover:text-primary-blue">Browse Events</a></li>
              <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
              <li><a href="#" className="hover:text-primary-blue">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-blue">FAQ</a></li>
            </ul>
          )}
        </div>
        <div className="md:hidden mb-8 pb-2 px-4 border-0 border-b-2   ">
          <button onClick={() => setShowSocialLinks(!showSocialLinks)} className="text-lg font-bold flex justify-between w-full">
            Social Media Links <span>{showSocialLinks ? <IoIosArrowDown /> : <IoIosArrowForward /> }</span>
          </button>
          {showSocialLinks && (
            <div className="flex space-x-6 mt-2 justify-center">
              <div className="w-8 h-8"><img src={wa} alt="WhatsApp" className="w-full" /></div>
              <div className="w-8 h-8"><img src={fa} alt="Facebook" className="w-full" /></div>
              <div className="w-8 h-8"><img src={ig} alt="Instagram" className="w-full" /></div>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:flex-col">
          <h2 className="text-xl font-bold mb-4">Quick Links:</h2>
          <ul className="space-y-2 list-disc">
            <li><a href="#" className="hover:text-primary-blue">Home</a></li>
            <li><a href="#" className="hover:text-primary-blue">Browse Events</a></li>
            <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">FAQ</a></li>
          </ul>
        </div>
        <div className="hidden md:flex md:flex-col">
          <h2 className="text-xl font-bold mb-4">Support Links:</h2>
          <ul className="space-y-2 list-disc">
            <li><a href="#" className="hover:text-primary-blue">Home</a></li>
            <li><a href="#" className="hover:text-primary-blue">Browse Events</a></li>
            <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">FAQ</a></li>
          </ul>
        </div>
        <div className="hidden md:flex md:flex-col">
          <h2 className="text-xl font-bold mb-4">Social Media Links:</h2>
          <div className="flex space-x-6">
            <div className="w-8 h-8"><img src={wa} alt="WhatsApp" className="w-full" /></div>
            <div className="w-8 h-8"><img src={fa} alt="Facebook" className="w-full" /></div>
            <div className="w-8 h-8"><img src={ig} alt="Instagram" className="w-full" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
