import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser().then(() => {
      // console.log(result)
    })
      .catch(() => {
      // console.log(error.message)
    })
  }

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `hover:text-[#6cc44c] text-lg font-semibold ${
              isActive ? `text-[#6cc44c] underline` : `text-[#1A73E8]`
            }`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `hover:text-[#6cc44c] text-lg font-semibold ${
              isActive ? `text-[#6cc44c] underline` : `text-[#1A73E8]`
            }`
          }>
          My profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar shadow-sm px-2 md:px-14 lg:px-28">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-bold text-[#1A73E8]">
            Skill<span className="text-[#6cc44c]">Swap</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.photoURL} alt={user.displayName} className="h-11 rounded-sm"/>
              <button onClick={handleLogout} className="bg-[#1A73E8] hover:bg-[#6cc44c] text-lg font-medium rounded-md text-white px-5 py-2">Logout</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to={"/auth/login"}>
                <button className="bg-[#1A73E8] hover:bg-[#6cc44c] text-lg font-medium rounded-md text-white px-5 py-2">
                  Login
                </button>
              </Link>
              <Link to={"/auth/register"}>
                <button className="bg-[#1A73E8] hover:bg-[#6cc44c] text-lg font-medium rounded-md text-white px-5 py-2">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
