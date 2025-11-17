import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TopRatedProviders from '../Components/TopRatedProviders';
import HowItWorks from '../Components/HowItWorks';
import SwiperCourseImages from '../Components/SwiperCourseImages';

const MainLayout = () => {
    return (
        <div className='max-w-[1920px] w-full mx-auto bg-[#E0F5F2]'>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section>
                    <SwiperCourseImages></SwiperCourseImages>
                </section>
                <section></section>
                <section>
                    <TopRatedProviders></TopRatedProviders>
                </section>
                <section>
                    <HowItWorks></HowItWorks>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;