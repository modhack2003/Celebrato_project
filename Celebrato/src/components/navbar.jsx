const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-white shadow-lg shadow-black-500/50 z-50">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <div className="flex items-center font-ICON">
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
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
