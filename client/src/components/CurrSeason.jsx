


function CurrSeason() {
  let currMonth = new Date().getMonth();
  let currSeason = ""
  switch (true) {
  case (currMonth === 11 || currMonth < 2):
    currSeason = "winter";
    break;
  case (currMonth >= 2 && currMonth < 5):
    currSeason = "spring";
    break;
  case (currMonth >= 5 && currMonth < 8):
    currSeason = "summer";

    break;
  case (currMonth >= 8 && currMonth < 11):
    currSeason = "autumn";

    break;
  default:
    currSeason = "all time"

  }

  return currSeason;
}


export default CurrSeason;
