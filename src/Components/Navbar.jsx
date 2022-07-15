import React from "react";
import { Link } from "react-router-dom";

const myDiv = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor:"aqua"
  
};

const Navbar = () => {
  return (
    <div style={myDiv}>
      <Link style={{textDecoration : "none"}} to="/movies"><h2>Movies List</h2></Link>
      <Link style={{textDecoration : "none"}} to="/addmovies"><h2>Add Movies</h2></Link>
    </div>
  );
};

export default Navbar;
