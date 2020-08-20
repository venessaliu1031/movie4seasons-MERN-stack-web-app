import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import RecommendForm from "./RecommendForm";
import api from "../api"


class Left extends React.Component {

  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.playVideo = this.playVideo.bind(this);
    // this.pauseVideo = this.pauseVideo.bind(this);
    this.state = {
      count: 0,
      movies: [],
      season: ""
    }
  }

  componentDidMount = async () => {
    let currMonth = new Date().getMonth();
    console.log("current month is " + currMonth);
    let currSeason = ""
    switch (true) {
    case (currMonth <= 3):
      currSeason = "winter";
      break;
    case (currMonth > 3 && currMonth <= 6):
      currSeason = "spring";
      break;
    case (currMonth > 6 && currMonth <= 9):
      currSeason = "summer";

      break;
    case (currMonth > 9):
      currSeason = "fall";

      break;
    default:
      currSeason = "all time"

    }
    this.setState({
      season: currSeason
    });

    await api.getAllMovies(currSeason).then(movies => {
      this.setState({
        movies: movies.data.data,
      })
    })
  }

  increase(id) {
    console.log(id);
    document.getElementById("like-count-"+id).textContent++;
    document.getElementById("like-button-"+id).style.color = "#5ab3e6";
    api.updateMovieById(id, {likeCount: document.getElementById("like-count-"+id).textContent});
  }

  playVideo(id) {
    const currVideo = document.getElementById("video-"+id);
    document.querySelectorAll("video").forEach(function(video){
      video.pause();
      video.style.display = "none";
    })

    currVideo.style.display = "inline-block";
    currVideo.play();
    // this.fade(currVideo);
  }

  // pauseVideo(id) {
  //   const currVideo = document.getElementById("video-"+id);
  //
  //   currVideo.style.display = "none";
  //   currVideo.pause();
  // }

  // fade(element) {
  //   var op = 0;
  //   var timer = setInterval(function () {
  //     if (op >= 1) clearInterval(timer);
  //     element.style.opacity = op;
  //     element.style.filter = 'alpha(opacity=' + op * 100 + ")";
  //     op += op * 0.1 || 0.1;
  //   }, 50);
  // }



  render() {

    const movies = this.state.movies
    console.log('TCL: MoviesList -> render -> movies', movies)


    var movieSection = movies.map(function(movie, index){
      let imagePath = "images/" + index + ".png";
      return (
        <Accordion key={index}>

        <Card bsPrefix="movie">
          <Card.Header bsPrefix="title-link">
            <Accordion.Toggle

              onMouseOver={() => this.playVideo(movie._id)}
              // onMouseOut={() => this.pauseVideo(movie._id)}
              bsPrefix="title-link" as={Button} variant="link" eventKey="1">
              {movie.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse bsPrefix="info" eventKey="1">
            <Card.Body bsPrefix="info-line">
            <img className="movie-image" src={imagePath} alt=""></img>
            <p>{movie.releaseDate} | {movie.genre}</p>
            <p>director | {movie.director}</p>
            <p>plot | {movie.plot}</p>
            <p>review | {movie.reviews}</p>
            <label id={"like-count-"+movie._id}> {movie.likeCount} </label>
            <button id={"like-button-"+movie._id}
              className="like-button"
              onClick={() => this.increase(movie._id)}>♥︎</button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      )
    }.bind(this))

    return (
    <div className="col col-12 col-lg-4 col-sm-6 block-left">
    {movieSection}
    <RecommendForm />


    </div>
)}
}

export default Left;
