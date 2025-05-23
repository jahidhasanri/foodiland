import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipics = () => {
  const [lovedItems, setLovedItems] = useState([]);

  const handleLoveClick = (index) => {
  const isLoved = lovedItems.includes(index);

  if (isLoved) {
    toast.info('Removed from favorites!');
    setLovedItems((prev) => prev.filter((i) => i !== index));
  
  } else {
    toast.success('Added to favorites!');
    setLovedItems((prev) => [...prev, index]);
  }
};

const data = [
    {
      title: 'Big and Juicy Wagyu Beef Cheeseburger',
      time: '30 Minutes',
      category: 'Snack',
      image: 'https://i.ibb.co/NnTJDG3J/Mask-Group.png',
    },
    {
      title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
      time: '30 Minutes',
      category: 'Fish',
      image: 'https://i.ibb.co/G4qXXqcY/Mask-Group-1.png',
    },
    {
      title: 'Strawberry Oatmeal Pancake with Honey Syrup',
      time: '30 Minutes',
      category: 'Breakfast',
      image: 'https://i.ibb.co/LdyhF1gY/Mask-Group-2.png',
    },
    {
      title: 'Fresh and Healthy Mixed Mayonnaise Salad',
      time: '30 Minutes',
      category: 'Healthy',
      image: 'https://i.ibb.co/5xnSW9mL/Mask-Group-3.png',
    },
    {
      title: 'Chicken Meatballs with Cream Cheese with sos',
      time: '30 Minutes',
      category: 'Meat',
      image: 'https://i.ibb.co/1tSYrkyd/Mask-Group-4.png',
    },
    {
      title: 'Chicken Meatballs with Cream Cheese with nothing',
      time: '30 Minutes',
      category: 'fish',
      image: 'https://i.ibb.co/Wptdm956/Ads.png',
    },
    {
      title: 'Fruity Pancake with Orange & Blueberry',
      time: '30 Minutes',
      category: 'Sweet',
      image: 'https://i.ibb.co/h18N4Ppp/Mask-Group-5.png',
    },
    {
      title: 'The Best Easy One Pot Chicken and Rice',
      time: '30 Minutes',
      category: 'Snack',
      image: 'https://i.ibb.co/FbByCQvQ/Mask-Group-6.png',
    },
    {
      title: 'The Creamiest Creamy Chicken and Bacon Pasta',
      time: '30 Minutes',
      category: 'Noodles',
      image: 'https://i.ibb.co/FbCtvGhB/Mask-Group-7.png',
    },
  ];

  return (
    <div className='container mx-auto px-4'>
      {/* your existing content */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item, index) => (
          <div key={index} className="relative rounded-[20px] p-5 overflow-hidden shadow hover:shadow-lg transition-all duration-300" style={{ background: "linear-gradient(180deg, rgba(231, 249, 253, 0), rgb(231, 249, 253) 100%)" }}>
            <img src={item?.image} alt={item.title || 'Advertisement'} className='w-full h-64 object-cover  rounded-[20px]' />
            {item.title && (
              <div className='p-4'>
                <h2 className='text-[24px] font-semibold text-gray-800'>{item.title}</h2>
                <div className='flex gap-12 items-center mt-4 text-sm text-gray-600 '>
                  <div className='flex gap-2 items-center'>
                    <MdTimer className='text-black w-5 h-5' />
                    <span>{item.time}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faUtensils} className="text-black w-4 h-4 mr-1" />
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={() => handleLoveClick(index)}
              className='absolute top-10 w-12 h-12 rounded-full bg-white right-10 text-white'
            >
              <FaHeart
                className={`text-xl  mx-auto transition-colors duration-300 ${
                  lovedItems.includes(index) ? 'text-red-500' : 'text-gray-300'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Recipics;
