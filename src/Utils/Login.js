import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Backend/Firebase";

const Login = ({ isLogInF }) => {
  const navigate = useNavigate();

  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isLoggedIn", true);
      isLogInF(true);

      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>

      <button onClick={signInWithGoogle} className="login-with-google-btn">
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
