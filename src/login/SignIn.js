import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import { blue } from "@mui/material/colors";
import Select from "react-select"
export default function SignIn() {
 
  let navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    username: "",
    email: "",
    isAdmin:"",
  });
  
const [message,setMessage]=useState("");
const [flag ,setFlag]=useState(false);
const { name, username, email,isAdmin } = register;


const [signUp ,setSignUp]=useState(false);
  const onInputChange = (e) => {
    
  setRegister({ ...register, [e.target.name] : e.target.value });
  if(e.target.value.trim().length < 3 ){
    setFlag(true);
   }
   if(e.target.value.trim().length > 3 ){
    setFlag(false);
    setMessage("");
   }  
};

  const onSubmit = async (e) => {
    if(flag){
      e.preventDefault();
      setMessage("Please enter proper details...");
   }
   if(!flag){
    e.preventDefault();
    await axios.post("http://localhost:8080/register", register);
    navigate("/");
   }
  };
const onClickLogin=()=>{
   navigate("/")
  }
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <div>
            {message ? <p style={{color:"red",fontWeight:"bold"}}>{message}</p>:null}
         </div>
          <h2 className="text-center m-4">Register</h2>

          <form onSubmit={(e) => onSubmit(e)}>
           
            
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
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
            
           
                <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  Is Admin
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Admin if you are admin else User..."
                  name="isAdmin"
                  value={isAdmin}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
               
            <button type="submit"  className="btn btn-outline-primary">
              Submit
            </button>
            
            <p>Already have an Account <a onClick={onClickLogin} style={{color:"blue"}}>Login</a> </p>
             
            
              
          </form>
        </div>
      </div>
    </div>
  );
}
