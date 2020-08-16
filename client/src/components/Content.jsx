import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import api from "../api";
// import Middle from "./Middle";
// import Right from "/Right";

function Content(){
  const movieList = api.getAllMovies
  console.log(movieList);


  return (
    <div className="row content-container">
    <Left/>
    <Middle />
    <Right />

    </div>
  )
};

export default Content;
