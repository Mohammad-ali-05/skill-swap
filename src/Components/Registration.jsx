import React, { useContext, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  /* Function for creating user */
  const handleUserRegistration = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (errorMessage) {
      return;
    }

    console.log(email, password);

    createUser(email, password)
      .then((userCredentials) => {
        console.log(userCredentials.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handlePasswordOnChange = (e) => {
    const password = e.target.value;

    if (!/^\S+$/.test(password)) {
      setErrorMessage("Password must not contain any space.");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain one uppercase character [A-Z].");
    } else if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must contain one lowercase character [a-z].");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage("Password must contain any special character.");
    } else if (!/\d/.test(password)) {
      setErrorMessage("Password must contain number [0-9]");
    } else if (!/^.{6,}$/.test(password)) {
      setErrorMessage("Password must be 6 character long.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#F4F7FB] rounded-lg mx-2.5 my-5 lg:my-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#2F435C] font-bold">Register now!</h1>
            <p className="py-6 max-w-xl">
              Join our community-focused platform to offer, learn, and trade
              skills within your local area. Register to browse detailed
              listings, connect with trusted providers, schedule learning
              sessions, and rate your experiences. Whether you're interested in
              music, languages, coding, or wellness, signing up unlocks
              personalized opportunities tailored to your skill-building
              journey.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUserRegistration}>
                <fieldset className="fieldset">
                  <label className="label text-2xl font-bold">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your name"
                    required
                  />
                  <label className="label text-2xl font-bold">Photo URl</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your photo url"
                    required
                  />
                  <label className="label text-2xl font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email"
                    required
                  />
                  <label className="label text-2xl font-bold">Password</label>
                  <div className="relative">
                    <input
                      onChange={handlePasswordOnChange}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-10 text-xl right-7 top-2.5">
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                  <div>
                    {errorMessage && (
                      <p className="text-red-500 text-sm mt-1">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">
                    Register
                  </button>
                </fieldset>
              </form>
              <div>
                <p className="text-center text-xl text-[#2F435C]">
                  Other register options
                </p>
                <button
                  onClick={() => googleLogin()}
                  className="btn bg-white text-black w-full mt-2 border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <p>Already have an account? <Link to="/auth/login" className="hover:underline">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
