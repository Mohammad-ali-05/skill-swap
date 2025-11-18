import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TopRatedProviders from "../Components/TopRatedProviders";
import HowItWorks from "../Components/HowItWorks";
import SwiperCourseImages from "../Components/SwiperCourseImages";
import SuccessStories from "../Components/SuccessStories";
import { Outlet } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="max-w-[1920px] w-full mx-auto bg-[#E0F5F2]">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section data-aos="fade-up">
          <SwiperCourseImages></SwiperCourseImages>
        </section>
        <section data-aos="fade-up">
          <Outlet></Outlet>
        </section>
        <section data-aos="fade-up">
          <TopRatedProviders></TopRatedProviders>
        </section>
        <section data-aos="fade-up">
          <SuccessStories></SuccessStories>
        </section>
        <section data-aos="fade-up">
          <HowItWorks></HowItWorks>
        </section>
      </main>
      <footer data-aos="fade-up">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
