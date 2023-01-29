import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import Select from "react-select";
export default function Login() {
  let navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    username: "",
    email: "",
    isAdmin: "",
  });
  const { name, username, email, isAdmin } = register;

  const [signUp, setSignUp] = useState(false);
  const onInputChange = (e) => {
    // if(e.target.value.trim().length < 3 )
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get("http://localhost:8080/registers");

    const foundUser = result.data.find(
      (element) =>
        element.email === register.email &&
        element.username === register.username &&
        element.isAdmin.toLowerCase() === "user"
    );

    const foundAdmin = result.data.find(
      (element) =>
        element.email === register.email &&
        element.username === register.username &&
        element.isAdmin.toLowerCase() === "admin"
    );

    if (foundUser) {
      navigate("/adduser");
    }
    if (foundAdmin) {
      navigate("/home");
    }
  };
  const onClickLogin = () => {
    setSignUp(true);
  };
  const onClickRegister = () => {
    navigate("/Signin");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Sign Up</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <p>
              Don't have an account?{" "}
              <a onClick={onClickRegister} style={{ color: "red" }}>
                Register
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
