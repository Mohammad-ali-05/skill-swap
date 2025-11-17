import React from 'react';
import { Link } from 'react-router';

const SwiperImage = ({ courseData }) => {
    const courseId = courseData.skillId
    const courseName = courseData.skillName
    const urlName = courseName.toLowerCase().split(" ").join("-")
    return (
        <div>
            <div className="relative group rounded-lg overflow-hidden">
              <img src={courseData.image} alt="" className='w-full'/>
              <Link to={`/course-details/${urlName}=${courseId}`}><button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-10 py-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto hover:bg-[#6cc44c]">View Details</button></Link>
            </div>
        </div>
    );
};

export default SwiperImage;