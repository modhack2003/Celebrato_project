import React from 'react';
import frame1 from '../assets/Frame3.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame1.png';

const HowItWorks = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold font-body text-gray-400 mb-8">HOW IT <span className="text-primary-blue">WORKS?</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 pb-6">
                    {/* Step 1 */}
                    <div className="bg-white p-8 flex shadow-md rounded-lg relative">
                        <img src={frame1} alt="Create Your Event" className="w-28 h-36 mx-auto mb-4 object-contain mr-4" />
                        <div className="flex flex-col w-[60%] md:w-auto p-0 items-start text-start">
                            <p className="text-md text-gray-900 font-body mb-4">Step 1:</p>
                            <h3 className="text-xl font-bold text-gray-900 font-body mb-2">Create Your Event</h3>
                            <p className="text-gray-600 font-Rubik">Start by creating an event profile with all the essential details.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 flex shadow-md rounded-lg relative">
                        <img src={frame2} alt="Customize and Plan" className="w-28 h-36 mx-auto mb-4 object-contain mr-4" />
                        <div className="flex flex-col w-[65%] md:w-auto p-0 items-start text-start">
                            <p className="text-md text-gray-900 font-body mb-4">Step 2:</p>
                            <h3 className="text-xl font-bold text-gray-900 font-body mb-2">Customize and Plan</h3>
                            <p className="text-gray-600 font-Rubik">Choose themes, set budgets, and manage guest lists with our easy-to-use tools.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 flex shadow-md rounded-lg relative">
                        <img src={frame3} alt="Manage and Track" className="w-28 h-36 mx-auto mb-4 object-contain mr-4" />
                        <div className="flex flex-col w-[65%] md:w-auto p-0 items-start text-start">
                            <p className="text-md text-gray-900 font-body mb-4">Step 3:</p>
                            <h3 className="text-xl font-bold text-gray-900 font-body mb-2">Manage and Track</h3>
                            <p className="text-gray-600 font-Rubik">Keep track of RSVPs, vendors, and schedules all in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
