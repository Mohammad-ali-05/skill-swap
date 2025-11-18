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
import Home from "../Pages/Home";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <section data-aos="fade-up">
        <SwiperCourseImages></SwiperCourseImages>
      </section>
      <section data-aos="fade-up">
        <Home></Home>
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
    </div>
  );
};

export default HomeLayout;
