import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../Components/CourseCard";

const Home = () => {
  const { courseData } = useLoaderData();
  const allCourseData = courseData;

  return (
    <div className="px-6 md:px-14 lg:px-28 py-10 my-10">
      <div className="shadow-lg rounded-lg bg-[rgba(244,247,251,0.6)] p-2 md:p-6 lg:p-10">
        <h1 className="font-bold text-center text-5xl text-[#1A73E8] my-10">
          Popular skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 items-stretch gap-4">
          {allCourseData.map((courseData, index) => (
            <CourseCard key={index} courseData={courseData}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
