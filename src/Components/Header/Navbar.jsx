import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"}>
        <li className="mr-4 font-semibold">Home</li>
      </Link>
      <Link to={"/listedBooks"}>
        <li className="mr-4 font-semibold">Listed Books</li>
      </Link>
      <Link to={"/readList"}>
        {" "}
        <li className="font-semibold">Read List</li>
      </Link>
    </>
  );
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="flex justify-center items-center text-2xl font-bold">
          <span className="text-red-600">B</span>
          <span className="text-blue-600">oo</span>
          <span className="text-green-600">k</span>
          <span className="ml-2"> </span>
          <span className="text-pink-600">V</span>
          <span className="text-amber-400">i</span>
          <span className="text-fuchsia-600">b</span>
          <span className="text-lime-500">e</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn ml-6 mr-2 text-white bg-[#23BE0A]">Sign Up</a>
        <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
