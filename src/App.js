import logo from "./logo.svg";
import "./App.css";
import Pages from "./Backend/Pages";
import Navbar from "./Utils/Navbar";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Backend/Firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isLogIn, isLogInF] = useState(localStorage.getItem("isLoggedIn"));

  console.log(isLogIn);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      isLogInF(false);
      navigate("/login");
    });
  };

  return (
    <div className="App">
      <Navbar isLogIn={isLogIn} signUserOut={signUserOut} />
      <Pages isLogIn={isLogIn} isLogInF={isLogInF} />
    </div>
  );
}

export default App;
