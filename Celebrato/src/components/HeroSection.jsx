// src/components/HeroSection.jsx


const HeroSection = () => {
  return (
    <div className="bg-dots  py-20">
      <div className="container mx-auto text-center w-[70%]">
        <h2 className="text-lg font-semibold text-black uppercase">Plan Your Perfect Event Effortlessly</h2>
        <h1 className="text-3xl md:text-5xl font-body font-semibold text-gray-900 my-6">
          From <span className="text-[#64AADD]">weddings</span> to <span className="text-[#64AADD]">birthday parties</span>,
          our app helps you manage every detail with ease.
        </h1>
    <button className="mt-6 px-6 py-3 w-[25vh] bg-[#64AADD] text-white text-lg rounded-xl [hover:bg-blue-600]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
