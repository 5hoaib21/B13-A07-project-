import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsDown } from "react-icons/tfi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-2 shadow"
          >
            {/* under hamberg navbar */}
            <NavLink to={"/"}>
              <button className="btn btn-neutral">Home</button>
            </NavLink>

            <NavLink to={"/timeline"}>
              <button className="btn btn-soft">Timeline</button>
            </NavLink>

            <NavLink to={"/stats"}>
              <button className="btn btn-soft">Stats</button>
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Keen Keeper</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <NavLink href={"/"}>
            <button
              className={({ isActive }) =>
                `${isActive ? "btn btn-neutral" : "btn btn-soft"} `
              }
            >
              <IoHomeOutline /> Home
            </button>
          </NavLink>

          <NavLink to={"/timeline"}>
            <button
              className={({ isActive }) =>
                `${isActive ? "btn btn-neutral" : "btn btn-soft"} `
              }
            >
              <RiTimeLine /> Timeline
            </button>
          </NavLink>

          <NavLink to={"/stats"}>
            <button
              className={({ isActive }) =>
                `${isActive ? "btn btn-neutral" : "btn btn-soft"} `
              }
            >
              <TfiStatsDown /> Stats
            </button>
          </NavLink>
       
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
