import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViewUser from "./ViewUser";

export default function AddUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
const [message,setMessage]=useState("");
  const { name, username, email } = user;
  const [flag ,setFlag]=useState(false);
  const onInputChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });
    
    if(e.target.value.trim().length < 3 ){
      setFlag(true);
     }
     if(e.target.value.trim().length > 3 ){
      setFlag(false);
      setMessage("");
     }  
     console.log(flag);
      
  };

  const onSubmit = async (e) => {
    console.log(flag);  
    if(flag){
      e.preventDefault();
      setMessage("All fields are required...");
   }
   if(!flag ){
    e.preventDefault();
     const data=await axios.post("http://localhost:8080/user", user);
    //  navigate("/home");
    } 
   
  };

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:8080/users");
  //   // setUser(result.data);
  //   const singleUser=result.data.find(e => e.email === user.email);
  //   console.log(result.data, singleUser, user);
  // };

  return (
    <div className="container">
        
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

        <div>
            {message ? <p style={{color:"red",fontWeight:"bold"}}>{message}</p>:null}
         </div>
          <h2 className="text-center m-4">Register User</h2>

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
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
