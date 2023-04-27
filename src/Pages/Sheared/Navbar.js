import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/process">How it Works</Link>
            </li>
            <li>
              <Link to="services">Prices & Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          My-Laundry
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/process">How it Works</Link>
          </li>
          <li>
            <Link to="services">Prices & Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn mx-2" to="/login">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
