import React from 'react';
import icon1 from '../assets/Administrative Tools.png'
import icon2 from '../assets/Timeline Week.png'

import icon3 from '../assets/Color Dropper.png'

import icon4 from '../assets/Paint Palette.png'
import icon5 from '../assets/Project Management.png'
import icon6 from '../assets/Available Updates.png'


const WhyChooseUs = () => {
  return (
    <section className="py-14 bg-white font-body"> 
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10  ">
        <h2 className="text-3xl font-bold text-gray-400 mb-8">WHY <span className='text-primary-blue'> CHOOSE</span> OUR APP?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-xl rounded-xl  text-start">
          {/* Feature 1 */}
          <div className="flex items-center  p-8 rounded-tl-xl border-dashed border-[#6ec3ff2f] border-r-2 border-b-2 ">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Planning Tools</h3>
              <p className="text-gray-600">From budgeting to guest lists, we've got everything you need to plan the perfect event.</p>
            </div>
            <img src={icon1} alt="Comprehensive Planning Tools" className="h-[100%] w-auto  ml-4" />
            <img src={icon2} alt="Comprehensive Planning Tools" className="h-[100%] w-auto  ml-4" />
          </div>

          {/* Feature 2 */}
          <div className="flex items-center p-8 rounded-tr-xl  border-dashed border-[#6ec3ff2f] border-b-2 ">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customizable Themes</h3>
              <p className="text-gray-600">Personalize your event with a variety of themes and decorations.</p>
            </div>
            <img src={icon3}alt="Customizable Themes" className="h-[100%] w-auto  ml-4 justify-self-end"  />
            <img src={icon4}alt="Customizable Themes" className="h-[100%] w-auto  ml-4" />
          </div>

          {/* Feature 3 */}
          <div className="flex items-center p-8 rounded-bl-xl  border-dashed border-[#6ec3ff2f]  border-r-2 ">
           
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor Management</h3>
              <p className="text-gray-600">Easily find and manage vendors for all your event needs.</p>
            </div>
            <img src={icon5}alt="Vendor Management" className="h-[100%] w-auto ml-24" />
          </div>

          {/* Feature 4 */}
          <div className="flex items-center p-8 rounded-br-xl  border-dashed border-[#6ec3ff2f]  ">
            <div className='justify-self-start'>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Stay updated with real-time notifications and reminders.</p>
            </div>
            <img src={icon6}alt="Real-time Updates" className="h-[100%] w-auto  ml-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
