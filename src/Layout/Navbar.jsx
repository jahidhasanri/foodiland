import React, { useState } from 'react';
import '../Layout/navbar.css'
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-[rgb(228,230,241)] items-center'>
      <div className='container mx-auto flex justify-between items-center py-11  lg:px-0'>

        {/* Logo */}
        <div>
          <h2 className='lobster-regular text-xl lg:text-2xl'>Foodieland <span className='text-orange-500 ml-[-6px]'>.</span></h2>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-[60px]'>
          <NavLink className='text-[16px] font-medium text-black'>Home</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>Recipes</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>Blog</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>Contact</NavLink>
          <NavLink className='text-[16px] font-medium text-black'>About Us</NavLink>
        </div>

        {/* Social Icons */}
        <div className='gap-4 flex lg:gap-10'>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>

        {/* Hamburger Menu Icon (Visible on small screens) */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='lg:hidden  pb-6'>
          <div className='flex flex-col gap-4'>
            <NavLink className='text-[16px] font-medium text-black'>Home</NavLink>
            <NavLink className='text-[16px] font-medium text-black'>Recipes</NavLink>
            <NavLink className='text-[16px] font-medium text-black'>Blog</NavLink>
            <NavLink className='text-[16px] font-medium text-black'>Contact</NavLink>
            <NavLink className='text-[16px] font-medium text-black'>About Us</NavLink>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
