import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import api from "../api"


class Left extends React.Component {

  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.state = {
      count: 0,
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

  increase(id) {
    console.log(id);
    document.getElementById("like-count-"+id).textContent++;
    api.updateMovieById(id, {likeCount: document.getElementById("like-count-"+id).textContent});
  }

  playVideo(id) {
    const currVideo = document.getElementById("video-"+id);

    currVideo.style.display = "inline-block";
    currVideo.play();
  }

  pauseVideo(id) {
    const currVideo = document.getElementById("video-"+id);

    currVideo.style.display = "none";
    currVideo.pause();
  }




  render() {

    const movies = this.state.movies
    console.log('TCL: MoviesList -> render -> movies', movies)

    var movieSection = movies.map(function(movie, index){
      return (
        <Accordion key={index}>

        <Card bsPrefix="movie">
          <Card.Header bsPrefix="title-link">
            <Accordion.Toggle

              onMouseOver={() => this.playVideo(movie._id)}
              onMouseOut={() => this.pauseVideo(movie._id)}
              bsPrefix="title-link" as={Button} variant="link" eventKey="1">
              {movie.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse bsPrefix="info" eventKey="1">
            <Card.Body bsPrefix="info-line">
            <p>director | {movie.director}</p>

            <p>release date | {movie.releaseDate}</p>
            <p>plot | {movie.plot}</p>
            <p>review | {movie.reviews}</p>
            <label id={"like-count-"+movie._id}> {movie.likeCount} </label>
            <button
              className="like-button"
              onClick={() => this.increase(movie._id)}>♥︎</button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      )
    }.bind(this))

    return (
    <div className="col-lg-4 col-md-6 block-left">
    {movieSection}


    </div>
)}
}

export default Left;
