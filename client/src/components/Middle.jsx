import React from "react";
import CurrSeason from "./CurrSeason";

import api from "../api"


class Middle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
    this.endVideo = this.endVideo.bind(this)
  }

  componentDidMount = async () => {

    await api.getAllMovies(CurrSeason).then(movies => {
      this.setState({
        movies: movies.data.data,
      })
    })
  }

  endVideo(id){
    document.getElementById("video-"+id).style.display = "none";
  }

  render() {

    const movies = this.state.movies

    var screenSection = movies.map(function(movie, index){

      const path = `/videos/${index}.mp4`
      return (

          <div className="video" key={index}>
            <video src={path} muted id={"video-"+movie._id}
            onEnded={() => this.endVideo(movie._id)}></video>
          </div>

      )
    }.bind(this))



    return (
      <div className="col col-lg-9 block-middle">
        <div className="inner-border">
        {screenSection}
        </div>


      <div id="scene">
        <img className="image1" data-depth="0.9" src="images/green.png" alt=""></img>
        <img className="image2" data-depth="0.7" src="images/fish-can.png" alt=""></img>
        <img className="image3" data-depth="0.5" src="images/bird.png" alt=""></img>

      </div>


      </div>
  )}

}

// https://raw.githubusercontent.com/maxym11/fancy-carousel-assets/master/CUUB%20PNK.png

export default Middle;
