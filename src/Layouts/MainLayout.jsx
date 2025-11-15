import React from 'react';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1920px] w-full mx-auto'>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
        </div>
    );
};

export default MainLayout;