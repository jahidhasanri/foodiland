import React, { useState } from 'react';

const Category = () => {
  const data = [
    { name: "Breakfast", img: "https://i.ibb.co/7N2Bb1q9/image-25.png" },
    { name: "Vegan", img: "https://i.ibb.co/PsV6yZgX/image-20.png" },
    { name: "Meat", img: "https://i.ibb.co/ymst1wZB/image-21.png" },
    { name: "Dessert", img: "https://i.ibb.co/SwgwZCz9/image-22.png" },
    { name: "Lunch", img: "https://i.ibb.co/dJkX8RJw/image-23.png" },
    { name: "Chocolate", img: "https://i.ibb.co/SDKyY3Gn/image-24.png" },
    { name: "Bacon & Eggs", img: "https://i.ibb.co/d0pN8Yzf/9820086-47450.jpg" },
    { name: "Vegan Smoothie", img: "https://i.ibb.co/ds5MGtJH/matcha-11489544.png" },
    { name: "Grilled Meat Platter", img: "https://i.ibb.co/jPtVCRRQ/beef-steak-9902836.png" },
    { name: "Chocolate Brownie", img: "https://i.ibb.co/mVcJB0Fx/brownie-2915870.png" }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? data : data.slice(0, 5);

  return (
    <div className="mt-[50px] container mx-auto mb-[70px]">
      <div className="md:flex items-center justify-between mb-10">
        <h1 className="text-[48px] font-semibold text-black">Categories</h1>
        <button
          className="btn bg-[rgb(231,250,254)]"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View all Category"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {visibleData.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md flex flex-col items-center text-center p-4 mb-10 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.img}
              className="w-[100px] h-[100px] object-cover rounded-full"
              alt={item.name}
            />
            <h3 className="mt-2 text-[14px] font-medium mb-10">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
