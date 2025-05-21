import React from 'react';
import '../Layout/navbar.css'
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[rgb(206,210,232)]'>
           <div className='container mx-auto '>
            <div>
            <h2 className='lobster-regular text-xl lg:text-2xl pt-5'>Foodieland <span className='text-orange-500 ml-[-6px]'>.</span></h2>
            <div className=' flex gap-3 lg:gap-[60px] md:justify-end'>
          <NavLink className='text-[16px] font-medium text-black'>Home</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>Recipes</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>Blog</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>Contact</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>About Us</NavLink>
        </div>
        <p className='mb-[48px]'>Taste the tradition in every bite.</p>
           </div>
        < hr />

            <div className='md:flex items-center justify-around pt-[48px] pb-[48px]'>
               <div className='md:text-center'> <h6>© 2020 Flowbase. Powered by Webflow</h6></div>
                 <div className='gap-4 flex lg:gap-10 lg:text-end'>
                          <FaFacebookF/>
                          <FaTwitter />
                          <FaInstagram />
                        </div>
            </div>

           </div>
        </div>
    );
};

export default Footer;