
 import React, { useState } from 'react';
    import { FaHeart } from 'react-icons/fa';
    import { MdTimer } from 'react-icons/md';
    import { faUtensils } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
    import { toast, ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

const DeliciousRecipi = () => {
      const data = [
        {
          title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
          time: '30 Minutes',
          category: 'Healthy',
          image: 'https://i.ibb.co/mVdztx4C/Mask-Group-8.png',
        },
        {
          title: 'Big and Juicy Wagyu Beef Cheeseburger',
          time: '30 Minutes',
          category: 'Western',
          image: 'https://i.ibb.co/YBWvtL3y/Mask-Group.jpg',
        },
        {
          title: 'Healthy Japanese Fried Rice with Asparagus',
          time: '30 Minutes',
          category: 'Healthy',
          image: 'https://i.ibb.co/Y43yVrdR/Mask-Group-1.jpg',
        },
        {
          title: 'Cauliflower Walnut Vegetarian Taco Meat',
          time: '30 Minutes',
          category: 'Western',
          image: 'https://i.ibb.co/prsR7gZ9/Mask-Group-2.jpg',
        },
        {
          title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
          time: '30 Minutes',
          category: 'Healthy',
          image: 'https://i.ibb.co/fV1SK7yJ/Mask-Group-3.jpg',
        },
        {
          title: 'Barbeque Spicy Sandwiches with Chips ',
          time: '30 Minutes',
          category: 'Snack',
          image: 'https://i.ibb.co/1JBwzXp9/Mask-Group-10.png',
        },
        {
          title: 'Firecracker Vegan Lettuce Wraps - Spicy! ',
          time: '30 Minutes',
          category: 'Seafood',
          image: 'https://i.ibb.co/Rk25B3J1/Mask-Group-4.jpg',
        },
        {
          title: 'Chicken Ramen Soup with Mushroom ',
          time: '30 Minutes',
          category: 'Japanese',
          image: 'https://i.ibb.co/sdTwQ8HZ/Mask-Group-5.jpg',
        },
        
      ];
   
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
    
  
    
    return (
       <div className='container mx-auto px-4 mb-10 md:mb-20 lg:mb-32'>
           <div className='md:flex justify-around items-center mb-[79px]'>
            <h2 className='text-[48px] font-semibold text-black'>Try this delicious recipe <br />
            to make your day</h2>
            <p className='text-[16px] font-normal lg:w-[620px]'>Try this irresistibly delicious recipe to brighten your day, lift your mood, and treat your taste buds to something truly unforgettable!</p>
           </div>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
               {data.map((item, index) => (
                 <div key={index} className="relative rounded-[20px] p-5 overflow-hidden shadow hover:shadow-lg transition-all duration-300" style={{ background: "linear-gradient(180deg, rgba(231, 249, 253, 0), rgb(231, 249, 253) 100%)" }}>
                   <img src={item?.image} alt={item.title || 'Advertisement'} className='w-full h-64   rounded-[20px]' />
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

export default DeliciousRecipi;