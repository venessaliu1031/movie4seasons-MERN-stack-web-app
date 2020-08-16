import React from "react";
import Footer from "./Footer"
import api from "../api"


class Middle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount = async () => {
    await api.getAllMovies().then(movies => {
      this.setState({
        movies: movies.data.data,
      })
    })
  }

  render() {

    const movies = this.state.movies

    var screenSection = movies.map(function(movie, index){

      const path = `/videos/${index}.mp4`
      return (

          <div className="video" key={index}>
            <video src={path} muted loop id={"video-"+movie._id}></video>
          </div>

      )
    })



    return (
    <div className="col-md-6 block-middle">
        <div className="inner-border">
        {screenSection}
        </div>


      <div id="scene">
        <img className="image1" data-depth="0.9" src="https://raw.githubusercontent.com/maxym11/fancy-carousel-assets/master/SPHEER%20PNK.png" alt=""></img>
        <img className="image2" data-depth="0.7" src="https://raw.githubusercontent.com/maxym11/fancy-carousel-assets/master/SPHEER%20PNK.png" alt=""></img>
        <img className="image3" data-depth="0.5" src="https://raw.githubusercontent.com/maxym11/fancy-carousel-assets/master/CUUB%20PNK.png" alt=""></img>

      </div>
      <Footer />


    </div>
  )}

}

export default Middle;
