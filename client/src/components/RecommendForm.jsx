import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from "../api";

class RecommendForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputSeason: ""
    };
    this.postNewMovie = this.postNewMovie.bind(this);
    this.updateInputName = this.updateInputName.bind(this);
    this.updateInputSeason = this.updateInputSeason.bind(this);
  }



  postNewMovie(name, season) {
    const newMovie = {
      name: name,
      season: season,
      verification: false
     };
    api.insertMovie(newMovie)
        .then(movie => window.location.reload(false));
  }

  updateInputName(evt) {
    this.setState({
      inputName: evt.target.value
    });
  }

  updateInputSeason(evt) {
    this.setState({
      inputSeason: evt.target.value
    });
  }




  render() {return (
    <Accordion>

    <Card bsPrefix="movie">
      <Card.Header bsPrefix="recommend-link">
        <Accordion.Toggle
          // onMouseOut={() => this.pauseVideo(movie._id)}
          bsPrefix="recommend-link" as={Button} variant="link" eventKey="1">
          recommend a movie
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse bsPrefix="info" eventKey="1">
        <Card.Body bsPrefix="recommend-form">
        <Form>
          <Form.Group controlId="formGroupMovieName">
            <Form.Label>movie name</Form.Label>
            <Form.Control value={this.state.inputName} onChange={evt => this.updateInputName(evt)} type="text" placeholder="is this not what you want? let me know your movie selection!" />
          </Form.Group>
          <Form.Group controlId="formGroupSeason">
            <Form.Label>Season</Form.Label>
            <Form.Control value={this.state.inputSeason} onChange={evt => this.updateInputSeason(evt)} as="select" custom>
              <option>- when is the best time to watch it? -</option>
              <option>spring</option>
              <option>summer</option>
              <option>autumn</option>
              <option>winter</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <button onClick={() => this.postNewMovie(this.state.inputName, this.state.inputSeason)} className="btn btn-dark">post</button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

)}
}

export default RecommendForm;
