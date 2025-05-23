import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const data=[
        {
            img:'https://i.ibb.co/4ZMdHwqs/Screenshot-2025-05-23-165223.png'
        },
        {
            img:'https://i.ibb.co/spcPCtJw/Screenshot-2025-05-23-165358.png'
        },
        {
            img:'https://i.ibb.co/PGSyg0nh/Screenshot-2025-05-23-165559.png'
        },
        {
            img:'https://i.ibb.co/6j86cBL/Screenshot-2025-05-23-165633.png'
        }
    ]
    return (
        <div className='container mx-auto mb-[100px] ' style={{background:'linear-gradient(180.00deg, rgba(231, 249, 253, 0),rgb(231, 249, 253) 100%)'}}>
           <h2 className='text-[48px] font-semibold text-black text-center mb-6'>Check out @foodieland on Instagram</h2>
           <p className='text-[16px] font-normal lg:w-[880px] mx-auto text-center mb-20'>Check out @foodieland on Instagram for mouthwatering food pics, drool-worthy recipes, behind-the-scenes kitchen magic, and daily doses of delicious inspiration that’ll make your taste buds dance!</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-32'>
             {
                data.map((item,index)=>(
                    <div key={index}>
                        <img src={item.img} className='w-full lg:w-[280px]' alt="" />
                    </div>
                ))
            }
           </div >
           <div className='text-center'><Link to={'https://www.instagram.com/jahadhasanrifat/' } className='btn mt-20 bg-gray-800 text-white text-center w-[229px] h-[60px] rounded-xl mb-20 'target='_blank'>Visit Our Instagram  <FaInstagram /></Link></div>
        </div>
    );
};

export default CheckOut;