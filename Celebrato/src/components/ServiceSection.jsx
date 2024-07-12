
import img1 from '../assets/marc-babin-aQWmCH_b3MU-unsplash 2.png'
import img2 from '../assets/kyle-head-WE-N1KDqEno-unsplash 1.png'
import img3 from '../assets/campaign-creators-gMsnXqILjp4-unsplash 1.png'
import img4 from '../assets/aleksandr-popov-9vDdkxSCAD4-unsplash 1.png'


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
    <div className="flex flex-col bg-white rounded-[14px] shadow-md overflow-hidden relative font-body w-[278px] h-[388px]">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 pl-4 pt-4 text-start">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <button className="absolute  bottom-0 right-0 bg-btn-bl2 w-24 h-16 flex items-center justify-center ellipsis-button-custom">
      <div className="flex pl-6  space-x-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
        </div>
      </button>
    </div>
  );
};

const ServiceSection = () => {
 

  return (
    <section className="py-16 font-body mb-20">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-20">OUR <span className='text-primary-blue'>SERVICES</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
