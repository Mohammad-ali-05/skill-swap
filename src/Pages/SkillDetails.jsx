import React from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const SkillDetails = () => {
  const allCourseData = useLoaderData();
  const { slug } = useParams();
  const [, urlId] = slug.split("=");

  const course = allCourseData.find(
    (courseData) => courseData.skillId === parseInt(urlId)
  );

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    toast("Appointment has been send");
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center px-6 md:px-14 lg:px-28 py-10 my-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 bg-[#F4F7FB] p-5 lg:p-10 rounded-lg">
        <div className="rounded-lg border-2 border-blue-300">
          <img src={course.image} alt="" className="h-full" />
        </div>
        <div className="flex flex-col justify-between p-3 bg-white border-2 border-blue-200 rounded-lg">
          <h3 className="text-[#2F435C] font-bold text-5xl">
            {course.skillName}
          </h3>
          <div className="flex justify-between items-center my-4">
            <h4 className="text-[#6C757D] text-2xl">{course.providerName}</h4>
            <p className="text-3xl text-[#2F435C] font-bold">
              Price: ${course.price}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#2F435C] text-lg bg-gray-200 px-2 rounded-sm">
              {course.slotsAvailable} slots left
            </p>
            <div className="flex gap-2 items-center text-xl">
              <FaStar className="text-yellow-400" />
              <p>{course.rating}</p>
            </div>
          </div>
          <p className="text-[#2F435C] text-lg">{course.description}</p>
          <p className="bg-blue-950 text-white px-2 rounded-lg text-xl w-fit">
            {course.category}
          </p>
        </div>
        <div className="bg-white px-2 py-3 lg:px-4 lg:py-6 rounded-lg border-2 border-blue-200">
          <div className="card-body">
            <p className="text-[#2F435C] text-4xl font-bold text-center mb-3">
              Book an appointment
            </p>
            <form onSubmit={handleAppointmentSubmit}>
              <fieldset className="fieldset">
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Your Email"
                  required
                />
                <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">
                  Book now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
