import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import '../index.css'

const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-341px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;