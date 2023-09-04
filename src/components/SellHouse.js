import Button from '../UI/Button';
import pics from '../assets/home1.jpg';

import classes from './SellHouse.module.css';

const SellHouse = () => {
  return (
    <div className={classes.move}>
      <div className={classes.text}>
        <h1>Ready to make a move ?</h1>
        <p>
          Real Estate is local. It’s about knowing the neighborhoods, the
          communities and the people who live there. CROWN affiliated agents have
          access to technology, relationships and strategies to help you buy or
          sell a home with confidence.
        </p>
        <div className={classes.buttons}>
            <Button className={classes.sell}>Sell</Button>
            <Button className={classes.buy}>Buy</Button>
        </div>
      </div>
      <div>
        <img src={pics} alt='selling home' />
      </div>
    </div>
  );
};

export default SellHouse;
