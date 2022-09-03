import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLogIn, signUserOut }) => {
  return (
    <nav>
      <Link to="/">Home</Link>

      {!isLogIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/createpost">Create Post</Link>
          <button onClick={signUserOut}>Log Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
