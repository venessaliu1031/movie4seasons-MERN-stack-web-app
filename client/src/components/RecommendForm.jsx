import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import api from "../api";

class RecommendForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputSeason: "",
      show: false
    };
    this.postNewMovie = this.postNewMovie.bind(this);
    this.updateInputName = this.updateInputName.bind(this);
    this.updateInputSeason = this.updateInputSeason.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }



  postNewMovie(name, season) {

    if (!name) {
      document.getElementById("formGroupMovieName").placeholder = "please enter a movie name"
    } else {
      this.setState({show: true})

      const newMovie = {
        name: name,
        season: season,
        verification: false
       };
      api.insertMovie(newMovie)
          .then(movie => console.log(movie));
    }



  }

  closeModal = () => {
    this.setState({show: false});
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
            <Form.Control value={this.state.inputName} onChange={evt => this.updateInputName(evt)} type="text" placeholder="tell me a movie you like" />
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
        <button variant="primary" onClick={() => this.postNewMovie(this.state.inputName, this.state.inputSeason)} className="btn btn-dark">submit</button>
        <Modal show={this.state.show} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>( ´͈ ᵕ `͈ )◞♡</Modal.Title>
          </Modal.Header>
          <Modal.Body>Hooray! Your recommendation has been delivered to Venessa. She will check her database once in a while (hopefully) and update the list with some of the best recommendations.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

)}
}

export default RecommendForm;
