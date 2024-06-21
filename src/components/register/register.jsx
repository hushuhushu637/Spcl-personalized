import axios from "axios";
import React, { useState } from "react";
// import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./register.css";
import Back from "../common/back/Back";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      if (res && res.data.success) {
        toast.success("User Registered successfully");
        // navigate("/login");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Back title="Register" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <img src="/images/logo.png"></img>
          </div>
          <div className="right row">
            <h1>Create Account</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="flexSB">
                {/* <p className="">Enter Your Name:-</p> */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flexSB"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
                {/* <p className="">Enter Your Email:-</p> */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flexSB"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <p className="">Enter Password:-</p>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flexSB"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
              <p className="">Enter Your ConfirmPassword:-</p>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flexSB"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone"
                required
              />
              <button type="submit" className="primary-btn">
                Create Account
              </button>
            </form>
            <div className="account-message">
              {/* <span>
                                Already have an account? <Link to="/login">Login</Link>
                            </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* 
            <form action="" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <p className="">Enter Your Name:-</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flexSB"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Name"
                        required
                        autoFocus
                    />
                </div>
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
                    <p className="">Enter Password:-</p>

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
                <div className="mb-3">
                    <p className="">Enter Your ConfirmPassword:-</p>

                    <input
                        type="text"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Phone"
                        required
                    />
                </div>



                <button type="submit" className="btn btn-primary mb-3">
                    REGISTER
                </button>



            </form> */}
    </>
  );
};

export default Register;
