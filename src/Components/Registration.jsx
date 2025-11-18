import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#F4F7FB] rounded-lg my-5 lg:my-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#2F435C] font-bold">Register now!</h1>
            <p className="py-6 max-w-xl">
              Join our community-focused platform to offer, learn, and trade skills within your local area. Register to browse detailed listings, connect with trusted providers, schedule learning sessions, and rate your experiences. Whether you're interested in music, languages, coding, or wellness, signing up unlocks personalized opportunities tailored to your skill-building journey.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label text-2xl font-bold">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label text-2xl font-bold">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label text-2xl font-bold">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <p>Error message</p>
                </div>
                <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
