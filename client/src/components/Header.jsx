import React from "react";
import CurrSeason from "./CurrSeason";
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      season: ""
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );

    this.setState({
      season: CurrSeason
    });
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }



  render() {return (
    <div className="heading-container">
      <p></p>
      <div className="title">
      <p>{this.state.season} movie list</p>
      </div>

      <div className="curr-time">

      <p>{this.state.time}</p>
      </div>
      <p></p>


    </div>
)}
};

export default Header;
