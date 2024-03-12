import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../src/firebase";
import { Link } from "react-router-dom";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(() => {
          window.location.href = "/login";
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSignUpWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        window.location.href = "/home"; // Redirect to home page after sign up
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleSignUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        window.location.href = "/home"; // Redirect to home page after sign up
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div className="coverS">
      <h1>Sing Up</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        style={{
          border: "none",
          outlineColor: "rgb(32,177,255)",
          backgroundColor: "rgb(229, 216, 216)",
          height: "4em",
          width: "80%",
          borderRadius: "0.28em",
          textAlign: "center",
        }}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        required
        value={username}
        style={{
          border: "none",
          outlineColor: "rgb(32,177,255)",
          backgroundColor: "rgb(229, 216, 216)",
          height: "4em",
          width: "80%",
          borderRadius: "0.28em",
          textAlign: "center",
        }}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
        required
        style={{
          border: "none",
          outlineColor: "rgb(32,177,255)",
          backgroundColor: "rgb(229, 216, 216)",
          height: "4em",
          width: "80%",
          borderRadius: "0.28em",
          textAlign: "center",
        }}
      />
      <button className="sign_btn" onClick={handleSignUp}
       style={{
        border: "none",
        borderRadius: "0.25em",
        fontSize:"1em",
       }}
      >Sign up</button>
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>

      <div className="alt_login">
        <div
          className="facebook"
          onClick={handleSignUpWithFacebook}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(229, 216, 216)",
          }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="facebook"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              padding: "5px",
              backgroundColor: "white",
            }}
          />
        </div>
        <div
          className="google"
          onClick={handleSignUpWithGoogle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(229, 216, 216)",
          }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              padding: "5px",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
