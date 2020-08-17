import React from "react";

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
        default: currSeason = "all time"

        }
        console.log("current season is "+ currSeason);
        this.setState({season: currSeason});
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

      <p>{this.state.time}</p>

    </div>
)}
};

export default Header;
