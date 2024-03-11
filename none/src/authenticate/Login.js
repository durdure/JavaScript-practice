import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../src/firebase";
import "./Login.css";
import { Form } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((authUser) => {
      window.location.href = "/home";
    }).catch((error) => {
      alert("Incorrect email or password. Please try again.");
    });
  };


  return (
    <div className="wrapper">

      <div className="form-wraper sign-in">
        <Form action="">
        <h2 style={
          {
            color:"#fff",
            fontSize:"30px",
            fontWeight:"bold",
            textAlign:"center",

          }
        }>Login</h2>
        
        <div className="input-group" style={
          {
            margin:"20px 0px",
            position:"relative",
            borderBottom:"2px solid #fff",
          }
        }>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <label for="" >Email</label>
        </div>
        <div className="input-group">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <label for="">Password</label>
        </div>
         

         <div className="remember">
          <input type="checkbox" name="" id="" />
          <label for="">Remember me</label>
         </div>
         <button onClick={handleLogin} type="submit" >Log in</button>

         <div className="signUp-link">
          <p>Don't have an account? <a href="">Sign up</a></p>
         </div>
        </Form>
      
        
    </div>


    </div>
  );
}

export default Login;