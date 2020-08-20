

let currMonth = new Date().getMonth();
let CurrSeason = ""
switch (true) {
case (currMonth <= 3):
  CurrSeason = "winter";
  break;
case (currMonth > 3 && currMonth <= 6):
  CurrSeason = "spring";
  break;
case (currMonth > 6 && currMonth <= 9):
  CurrSeason = "summer";

  break;
case (currMonth > 9):
  CurrSeason = "fall";

  break;
default:
  CurrSeason = "all time"

}

export default CurrSeason;
