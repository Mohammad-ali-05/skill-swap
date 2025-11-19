import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-around items-center">
      <h2 className="text-7xl text-[#2F435C] font-bold">Opps error page</h2>
      <p className="font-semibold text-3xl text-center text-[#6C757D] mt-2.5 mb-10">
        The page you are looking for is not available
      </p>
      <Link>
        <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">
          Go to home page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
