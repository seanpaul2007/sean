import React, { useState } from "react";
import './App.css';
import './SignUp.css';
import './Home.js'
import { Link } from "react-router-dom";
const SignUp = () => {
    const [action,setAction] = useState("Login")
    return(
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="Underline"></div>
            </div>
            <div className="inputs">
               {action=== "Login"?<div></div>:<div className="input">
                    <img src="user_icon" alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>} 
                 <div className="input">
                    <img src="Email_icon" alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                 <div className="input">
                    <img src="pssword_icon" alt=""/>
                    <input type="Password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">forgot password?<span>Click here!</span> </div>}
            <div className="submit-container">
                <div className={action== "Login"?"submit gray":'submit'} onClick={()=> {setAction("Sign up")}}>Sign Up</div>
                 <div className={action=== "Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}} >Login</div>
            </div>
        </div>
    )
}
export default  SignUp;
  