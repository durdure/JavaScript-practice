import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import "./Login.css";
import {Link} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupStyle, showPopup] = useState("hide");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        window.location.href = "/home";
      })
      .catch((error) => {
        alert("Incorrect email or password. Please try again.");
      });
  };

  const popup = () => {
    showPopup("login-popup");
    setInterval(() => showPopup("hide"), 3000);
  };

  const handleLoginAndPopup = () => {
    handleLogin();
    popup();
  };

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        window.location.href = "/home";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleLoginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        window.location.href = "/home";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div className="cover">
      <h1>Login</h1>

      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
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
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
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
      <div className="login_btn" onClick={handleLoginAndPopup}>
        Log in
      </div>
      
      <p>Don't have an account? <Link to='/'>Sign up</Link></p>

      <div className="text">Or Log in Using </div>

      <div className="alt_login">
        <div
          className="facebook"
          onClick={handleLoginWithFacebook}
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
          onClick={handleLoginWithGoogle}
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

export default Login;
