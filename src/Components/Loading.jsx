import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-dvh flex justify-center items-center">
      <Circles
        height="150"
        width="150"
        color="#1A73E8"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
