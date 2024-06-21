import React, { useState } from "react";
import axios from "axios";
import Back from "../common/back/Back";
// import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();

  // const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success("Login successfully");
        setEmail("");
        setPassword("");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Login - Frontend");
    }
  };
  return (
    <>
      <Back title="Login" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <img src="/images/logo.png"></img>
          </div>
          <div className="right row">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
              <p className="">Enter Your Email:-</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flexSB"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
              <p className="">Enter Your Password:-</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flexSB"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
              <button type="submit" className="primary-btn">
                Login
              </button>
            </form>
            {/* <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span> */}
          </div>
        </div>
      </section>

      {/* 
      <form action="" onSubmit={handleSubmit}>

        <div className="mb-3">
          <p className="">Enter Your Email:-</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <p className="">Enter Your Password:-</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>


        <button type="submit " className="btn btn-primary mb-3">
          LOGIN
        </button>




      </form> */}
    </>
  );
};

export default Login;
