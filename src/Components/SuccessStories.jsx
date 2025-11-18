import React from "react";
import SuccessStoryCard from "./SuccessStoryCard";
import { useLoaderData } from "react-router";

const SuccessStories = () => {
  const { successData } = useLoaderData();

  return (
    <div className="px-6 md:px-14 lg:px-28 py-10 my-10">
      <h2 className="font-bold text-center text-5xl text-[#1A73E8] my-10">
        Our success stories
      </h2>
      <p className="font-semibold text-2xl text-center text-[#6C757D] mt-2.5 mb-10">
        Real stories of growth and connection
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
        {successData.map((successStory, index) => (
          <SuccessStoryCard key={index} successStory={successStory}></SuccessStoryCard>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
