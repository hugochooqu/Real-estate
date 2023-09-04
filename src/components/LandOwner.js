import Button from "../UI/Button";
import classes from "./LandOwner.module.css";

const LandOwner = () => {
  return (
    <div className={classes.owner}>
      <div className={classes.text}>
        <h1>Do you own a home ?</h1>
        <h2>Join our partner landlord and agents</h2>
        <p>Earn big in rental income from the best tenants in Nigeria</p>
        <Button className={classes.button}>Get Started</Button>
      </div>
    </div>
  );
};

export default LandOwner;
