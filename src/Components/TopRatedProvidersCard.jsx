import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedProvidersCard = ({ singleCourse }) => {
  const courseId = singleCourse.skillId;
  const courseName = singleCourse.skillName;
  const urlName = courseName.toLowerCase().split(" ").join("-");
  console.log(urlName);
  return (
    <div>
      <div className="bg-white rounded-lg flex flex-col justify-between shadow-md p-4 h-full">
        <h2 className="text-center text-[#1A73E8]">
          <span className="text-3xl font-bold">{singleCourse.skillName}</span>{" "}
          <br />
          <span className="text-[#6cc44c] text-2xl font-semibold my-3">
            by {singleCourse.providerName}
          </span>
        </h2>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h3 className="text-[#6C757D] text-[20px] font-semibold">
              {singleCourse.category}
            </h3>
            <p className="flex items-center">
              <FaStar className="text-yellow-400" />{" "}
              <span>{singleCourse.rating}</span>
            </p>
          </div>
          <Link to={`/course-details/${urlName}=${courseId}`}>
            <button className="bg-[#1A73E8] hover:bg-[#6cc44c] rounded-md text-white w-full mt-2 h-10">
              View course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProvidersCard;
