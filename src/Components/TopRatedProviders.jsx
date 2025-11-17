import React from 'react';
import { FaStar } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import TopRatedProvidersCard from './TopRatedProvidersCard';

const TopRatedProviders = () => {
    const allCourseData = useLoaderData()
    const sortedCourseData = allCourseData.sort((a, b) => b.rating - a.rating)
    const topFiveCourseData = sortedCourseData.slice(0,5) 

    return (
        <div className='px-6 md:px-14 lg:px-28 py-10 my-10'>
            <div className='shadow-lg rounded-lg bg-[rgba(244,247,251,0.6)] p-2 md:p-6 lg:p-10'>
                <h1 className='font-bold text-center text-5xl text-[#1A73E8] my-10'>Top 5 Providers</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-stretch gap-4'>
                    {
                        topFiveCourseData.map((singleCourse, index)=> <TopRatedProvidersCard key={index} singleCourse={singleCourse}></TopRatedProvidersCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRatedProviders;