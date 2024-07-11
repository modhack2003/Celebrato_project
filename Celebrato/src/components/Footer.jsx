// src/components/Footer.jsx
import fa from "../assets/Facebook.png"
import wa from "../assets/WhatsApp.png"
import ig from "../assets/Instagram.png"

const Footer = () => {
  return (
    <div className="bg-black text-white py-36 h-[59vh] font-body">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-3xl font-ICON mb-8">
            Cele<span className="text-primary-blue">brato</span>
          </h2>
          <div className="text-sm">
            <p className="text-lg mb-4 font-semibold">Contact Information:</p>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="">
          <h2 className=" text-xl font-bold mb-4">Quick Links:</h2>
          <ul className="space-y-2 list-disc">
            <li><a href="#" className="hover:text-primary-blue">Home</a></li>
            <li><a href="#" className="hover:text-primary-blue">Browse Events</a></li>
            <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold  mb-4">Support Links:</h2>
          <ul className="space-y-2 list-disc ">
            <li><a href="#" className="hover:text-primary-blue">Home</a></li>
            <li><a href="#" className="hover:text-primary-blue">Browse Events</a></li>
            <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary-blue">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media Links:</h2>
          <div className="flex space-x-6">
            {/* Add social links */}
            <div className="w-8 h-8  "><img src={wa} alt=""  className="w-full"/></div>
            <div className="w-8 h-8 "><img src={fa} alt="" className="w-full"/></div>
            <div className="w-8 h-8 "><img src={ig} alt=""className="w-full "/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
