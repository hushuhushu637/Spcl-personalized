import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { useAuth } from "../../../context/auth";
import { toast } from "react-toastify";

const Header = () => {
  const [click, setClick] = useState(false);

  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    //ham sirf user ko null kar rahe hai , baki sara data ko save karke rakhn ahi aisliye ham.

    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    toast.success("User logout Successfully");
    localStorage.removeItem("auth");
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            {/* <li>
              <Link to="/pricing">Pricing</Link>
            </li> */}
            <li>
              <Link to="/journal">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            {!auth.user && (
              <div className="button">
                <Link to="/Login">Login</Link>
              </div>
            )}
            {!auth.user && (
              <div className="button">
                <Link to="/Register">Register</Link>
              </div>
            )}
            {auth.user && (
              <div className="button">
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            )}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
