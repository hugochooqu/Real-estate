import Button from "../UI/Button";
import pics from "../assets/commercial.jpg";

import classes from "./WhatNext.module.css";

const WhatNext = () => {
  return (
    <div className={classes.next}>
      <div className={classes.nextText}>
        <h1>What Comes Next? You Tell Us</h1>
        <p>Let the CROWN® brand help you build the business of your dreams.</p>
      </div>
      <div>
        <img src={pics} alt="crown office" />
      </div>
      <div className={classes.buttons}>
        <Button className={classes.button}>Franchise ownerships</Button>
        <Button className={classes.button}>Careers in real estate</Button>
      </div>
      <div>
        <p>
          Duis et ligula quis erat faucibus fermentum vel nec diam. Pellentesque
          elementum egestas odio, eu placerat sem consequat eu. Pellentesque nec
          dictum erat. Proin ultricies lectus mauris, nec commodo ante dignissim
          nec. Integer tortor odio, varius tempus lectus in, faucibus porttitor
          mauris. Fusce lorem magna, pretium vitae lacus eu, semper dictum
          risus. Mauris consequat venenatis tellus, vel commodo mauris pharetra
          et. Phasellus sit amet neque sagittis, tristique mauris a, consectetur
          diam. Curabitur dictum metus at lacus pulvinar, sed iaculis augue
          venenatis. Maecenas quis tincidunt dolor. In sed magna non lacus
          malesuada porttitor nec a erat. Aliquam nec erat placerat nulla
          ullamcorper dignissim.
        </p>
      </div>
    </div>
  );
};

export default WhatNext;
