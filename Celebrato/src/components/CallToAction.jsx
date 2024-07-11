// src/components/CallToAction.jsx


const CallToAction = () => {
  return (
    <div className="bg-blue-bg py-24 font-body">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-semibold text-black uppercase">Ready to Plan Your Perfect Event?</h2>
        <h1 className="text-3xl md:text-5xl font-semibold text-black mt-8">
          Sign up now and start planning with ease!
        </h1>
        <button className="mt-12 px-12 py-4 bg-btn-bl text-white text-lg rounded-xl [hover:bg-gray-700]">
          Sign up Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
