import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Footer from "./Footer"
import api from "../api";
// import Middle from "./Middle";
// import Right from "/Right";

function Content(){
  const movieList = api.getAllMovies
  console.log(movieList);


  return (
    <div className="row content-container">
      <Left/>
      <div className="col-lg-8 col-sm-6 block-middle-right">
        <div className="row block-upper-right">
          <Middle />
          <Right />
        </div>
        <Footer />
      </div>
    </div>

  )
};

export default Content;
