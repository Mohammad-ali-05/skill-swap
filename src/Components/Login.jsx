import React from "react";

const Login = () => {
  return (
    <div >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#F4F7FB] rounded-lg my-5 lg:my-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#2F435C] font-bold">Login now!</h1>
            <p className="py-6 max-w-xl">
              Welcome back to our interactive skill-sharing platform. Log in to access your saved listings, manage bookings, and reconnect with local providers offering skills like guitar lessons, language exchange, coding help, or yoga training. Your personalized dashboard keeps everything organized, helping you continue learning and exploring new opportunities in your area.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label text-2xl font-bold">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label text-2xl font-bold">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">Register</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
