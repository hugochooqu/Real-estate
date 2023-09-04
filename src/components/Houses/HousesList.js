import pics from "../../assets/home1.jpg";

import Card from "../../UI/card";
import classes from "./HousesList.module.css";

const HousesList = (props) => {
  return (
    <Card className={classes.cardContainer}>
      <img src={pics} alt="home" className={classes.cardImg} />
      <h1 className={classes.cardTitle}>home</h1>
    </Card>
  );
};

export default HousesList;
