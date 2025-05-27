import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='dark:bg-gray-700'>
                <div className='w-full md:w-11/12 md:mx-auto '>
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;