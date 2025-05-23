import React from 'react';

const Inbox = () => {
    return (
        <div className='container mx-auto mb-[160px]'>
            <div className="relative bg-[#e7f9ff] rounded-[40px] p-10 text-center overflow-hidden">
            <img
                src="/src/images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png"
                alt="Decorative veggies left"
                className="absolute hidden lg:block lg:left-[-120px] lg:bottom-[-120px] w-32 md:w-[409px] lg:h-[409px]"
            />
            <img
                src="/src/images/Photo.png"
                alt="Decorative salad right"
                className="absolute hidden lg:block lg:right-[-110px] lg:bottom-[-140px] w-32 md:w-[470px] lg:h-[355px]"
            />

            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-20 mb-6">
                Deliciousness to your inbox
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim
            </p>

            {/* Email input and button */}
            <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
                <input
                    type="email"
                    placeholder="Your email address..."
                    className="px-6 py-3 rounded-full shadow-md w-[280px] md:w-[360px] outline-none"
                />
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-800 transition">
                    Subscribe
                </button>
            </div>
        </div>
        </div>
    );
};

export default Inbox;
