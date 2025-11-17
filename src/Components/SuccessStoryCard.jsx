import React from "react";

const SuccessStoryCard = ({ successStory }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-xl border-2 border-[#D0E6F0] flex flex-col items-center justify-between p-10 h-full">
        <div>
          <img
            src={successStory.avatar}
            alt=""
            className="text-[#1A73E8] text-9xl border-3 w-fit mx-auto border-[#D0E6F0] rounded-full"
          />
          <h3 className="text-[#2F435C] text-3xl text-center font-bold my-5">
            {successStory.name}
          </h3>
          <p className="text-[#4A4A4A] text-xl rounded-sm bg-[#F0F2F5] text-center">
            {successStory.review}
          </p>
        </div>
        <div>
          <p className="text-[#1A73E8] text-lg underline text-center mt-5 mb-2">
            Skill learned {successStory.skillLearned}
          </p>
          <p className="text-[#6C757D] text-center">{successStory.date}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
