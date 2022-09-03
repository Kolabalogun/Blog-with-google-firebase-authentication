import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreatePost from "../Utils/CreatePost";
import Home from "../Utils/Home";
import Login from "../Utils/Login";

const Pages = ({ isLogIn, isLogInF }) => {
  return (
    <Routes>
      <Route path="/" element={<Home isLogIn={isLogIn} />} />
      <Route path="/login" element={<Login isLogInF={isLogInF} />} />
      <Route path="/createpost" element={<CreatePost isLogIn={isLogIn} />} />
    </Routes>
  );
};

export default Pages;
