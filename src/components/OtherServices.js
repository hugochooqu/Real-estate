import Button from "../UI/Button";
import classes from "./OtherServices.module.css";

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.interior}>
        <div className={classes.interiorText}>
          <h3>INTERIOR</h3>
          <p>Explore our interior design services</p>
          <Button className={classes.button}>Visit CROWN interior</Button>
        </div>
      </div>
      <div className={classes.buildings}>
        <div className={classes.luxury}>
          <div className={classes.luxuryText}>
            <h3>LUXURY</h3>
            <p>Explore featured luxury homes & Estates.</p>
            <Button className={classes.button}>Visit CROWN luxury</Button>
          </div>
        </div>
        <div className={classes.commercial}>
          <div className={classes.commercialText}>
            <h3>COMMERCIAL</h3>
            <p>
              A Global brand with local representation specializing in
              Commercial Real Estate spaces.
            </p>
            <Button className={classes.button}>Visit CROWN luxury</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
