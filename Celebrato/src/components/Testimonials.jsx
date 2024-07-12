import React from 'react';
import avatar from '../assets/avataar 1.png'





const StarRating = ({ rating, maxRating = 5 }) => {
    const stars = Array.from({ length: maxRating }, (_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 20.312 4.665 24 6 15.601 0 9.748l8.332-1.73L12 .587z" />
      </svg>
    ));
  
    return <div className="flex space-x-1">{stars}</div>;
  };
  

  

const TestimonialCard = ({ name, review , imgurl , rating }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
            <img
                src= {imgurl} // Replace with the actual image URL
                alt={`${name}'s avatar`}
                className="w-12 h-12 rounded-xl mr-4"
            />
            <div>
                <h5 className="text-lg font-medium text-gray-900">{name}</h5>
               <StarRating rating={rating} />
            </div>
        </div>
        <p className="text-gray-700">"{review}"</p>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            imgurl: avatar,
            name: "Sarah K.",
            review: "This app made planning my wedding so much easier. I could manage everything in one place!",
            rating: 4
        },
        {
            imgurl: avatar,
            name: "Sarah K.",
            review: "This app made planning my wedding so much easier. I could manage everything in one place!",
            rating: 3
        },
        {
            imgurl: avatar,
            name: "Sarah K.",
            review: "This app made planning my wedding so much easier. I could manage everything in one place!",
            rating: 5
        },
        {
            imgurl: avatar,
            name: "Sarah K.",
            review: "This app made planning my wedding so much easier. I could manage everything in one place!",
            rating: 2
        },
        // Add more testimonials as needed
    ];

    return (
        <section className="py-12 bg-gray-100 font-body">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-500 mb-8">
                    WHAT OUR <span className='text-primary-blue'>CUSTOMERS</span> SAY
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
