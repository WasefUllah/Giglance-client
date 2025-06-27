import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink, Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-center items-center py-4 gap-4'>
                    <NavLink to={"/dashboard/mytask"} className={"py-1 px-2 text-lg"}>My tasks</NavLink>
                    <NavLink to={"/dashboard/tasks"} className={"py-1 px-2 text-lg"}>All tasks</NavLink>
                    <NavLink to={"/dashboard/addtask"} className={"py-1 px-2 text-lg"}>Add tasks</NavLink>
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;