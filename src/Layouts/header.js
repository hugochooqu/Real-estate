import { useEffect, useState } from "react";
import classes from "./header.module.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeHeader = () => {
    window.scrollY >= 200 ? setNavbar("rgb(17, 7, 75)") : setNavbar(false);
  }

  useEffect(() => {
    changeHeader();
    window.addEventListener("scroll", changeHeader)
  }
  )

  return (
    <div style={{backgroundColor: navbar}} className={classes.header}>
      <div className={classes.navigate}>
        <ul>
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Agent finder</li>
        </ul>
      </div>
      <div><h1 style={{margin:"0px"}}>Crown</h1></div>
      <div className={classes.navigate}>
        <ul>
          <li>Manage Rentals</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
