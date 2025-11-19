import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, ScrollRestoration } from 'react-router';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="max-w-[1920px] w-full mx-auto min-h-screen flex flex-col bg-[#E0F5F2]">
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='flex-1'>
                <ScrollRestoration></ScrollRestoration>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;