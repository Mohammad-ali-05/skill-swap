import React, { useContext, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser, googleLogin, setEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    loginUser(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate(location.state ? `${location.state}` : "/");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setErrorMessage("Invalid email or password");
        }
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then(() =>
      navigate(location.state ? `${location.state}` : "/")
    );
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#F4F7FB] rounded-lg mx-2.5 my-5 lg:my-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#2F435C] font-bold">Login now!</h1>
            <p className="py-6 max-w-xl">
              Welcome back to our interactive skill-sharing platform. Log in to
              access your saved listings, manage bookings, and reconnect with
              local providers offering skills like guitar lessons, language
              exchange, coding help, or yoga training. Your personalized
              dashboard keeps everything organized, helping you continue
              learning and exploring new opportunities in your area.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUserLogin}>
                <fieldset className="fieldset">
                  <label className="label text-2xl font-bold">Email</label>
                  <input onChange={handleEmailOnChange}
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email"
                    required
                  />
                  <label className="label text-2xl font-bold">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Enter your password"
                      required
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-10 text-xl right-7 top-2.5">
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  <div>
                    {errorMessage && (
                      <p className="text-red-500 text-sm mt-1">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <div>
                    <Link
                      to={"/auth/reset-password"}
                      className="link link-hover">
                      Forgot password?
                    </Link>
                  </div>
                  <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
              <div>
                <p className="text-center text-xl text-[#2F435C]">
                  Other register options
                </p>
                <button
                  onClick={handleGoogleLogin}
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
                <p>
                  Don't have an account?{" "}
                  <Link to="/auth/register" className="hover:underline">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
