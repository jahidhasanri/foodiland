import React from 'react';
import { FaClock, FaUtensils, FaPlay } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const Banner = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between  ">
        
        {/* Left Content */}
        <div className="flex-1 md:w-[675px] bg-[#e8f6fd] h-[440px] rounded-l-xl">
          <span className="bg-white text-sm text-gray-700 px-3 py-1 rounded-full shadow inline-block mb-4 mt-[50px] lg:ml-[50px]">
            🔥 Hot Recipes
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 lg:ml-[50px]">
            Spicy delicious <br /> chicken wings
          </h1>

          <p className="text-gray-600 mb-6 max-w-md lg:ml-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Tags */}
          <div className="flex items-center gap-4 mb-[45px] lg:ml-[50px]">
            <span className="flex items-center gap-2  bg-white px-4 py-2 rounded-full shadow text-sm">
              <FaClock className="text-gray-600" />
              30 Minutes
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
              <FaUtensils className="text-gray-600" />
              Chicken
            </span>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between max-w-sm lg:ml-[50px] pb-4">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.ibb.co/k15sTdp/avatar.jpg" // replace with real image
                alt="author"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">John Smith</p>
                <p className="text-xs text-gray-500">15 March 2022</p>
              </div>
            </div>

            {/* View Recipe Button */}
            <button className="bg-black text-white px-6 py-3 rounded-full  flex items-center gap-2 hover:bg-gray-800">
              <FaPlay className="text-white" />
              View Recipes
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <img
            src="/src/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
            alt="Chicken Wings"
            className="w-full h-[440px] mx-auto rounded-r-xl"
          />
          {/* Badge */}
          <div className="hidden lg:block absolute lg:top-28 xl:top-36 left-0 translate-x-[-50%] translate-y-[-50%]">
            <img
              src="/src/images/restaurant-interior.jpg" 
              alt="Badge"
              className="md:w-[150px] md:h-[150px] rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
