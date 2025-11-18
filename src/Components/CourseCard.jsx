import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const CourseCard = ({ courseData }) => {
  const courseId = courseData.skillId;
  const courseName = courseData.skillName;
  const urlName = courseName.toLowerCase().split(" ").join("-");
  return (
    <div className="bg-white p-5 rounded-xl">
      <div>
        <img src={courseData.image} alt="" className="rounded-lg" />
        <h3 className="text-[#2F435C] text-3xl font-bold my-4">
          {courseData.skillName}
        </h3>
        <div className="flex justify-between">
          <div>
            <p className="text-[#6C757D] text-2xl font-bold">
              {courseData.providerName}
            </p>
            <p className="text-[#4A4A4A] text-xl">
              {courseData.description.split(" ").slice(0, 5).join(" ")}...
            </p>
          </div>
          <p className="text-[#2F435C] text-2xl font-bold">
            ${courseData.price}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-xl flex items-center gap-1 flex-row-reverse">
            <FaStar className="text-yellow-500" />
            <p>{courseData.rating}</p>
          </div>
          <Link to={`/course-details/${urlName}=${courseId}`}>
            <button className="text-white text-2xl bg-[#1A73E8] hover:bg-[#6cc44c] font-bold rounded-lg px-4 py-1">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
