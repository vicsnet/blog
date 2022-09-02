import React from "react";
import { auth, provider } from "../firebsae-config";
import { signInWithPopup } from "firebase/auth";

//to  go to homepage after login
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      //to still login when tab is close
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      //to go to homepage
      navigate('/')
    });
  };
  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
