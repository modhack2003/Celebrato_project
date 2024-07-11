

const Navbar = () => {
  return (
    <div className=" sticky w-full bg-white shadow-lg shadow-black-500/50 ">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <div className="flex items-center font-ICON">
          <span className="text-3xl font-bold text-black">
            Cele<span className="text-primary-blue">brato</span>
          </span>
        </div>
        <div className="flex items-center space-x-8 font-body font-semibold text-lg">
          <a href="#" className="text-black hover:text-blue-500 ">Home</a>
          <a href="#" className="text-black hover:text-blue-500  ">About Us</a>
          <a href="#" className="text-black hover:text-blue-500 ">Events</a>
          <a href="#" className="text-black hover:text-blue-500 ">FAQ</a>
          <a href="#" className="text-black hover:text-blue-500 ">Contact</a>
        </div>
        <div>
          <button className="bg-btn-bl text-white px-6 py-2 rounded-lg hover:bg-gray-900 w-[146px] ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
