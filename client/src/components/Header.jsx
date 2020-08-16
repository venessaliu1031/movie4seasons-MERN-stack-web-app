import React from "react";

class Header extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }


  render() {return (
    <div className="row heading-container">
      <div className="col-md-3">
      <p></p>
      </div>

      <div className="col-md-6">

      <p>movies to watch in the summer</p>

      </div>

      <div className="curr-time col-md-3">

      <p>{this.state.time}</p>

      </div>

    </div>
)}
};

export default Header;
