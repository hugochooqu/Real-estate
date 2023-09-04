import React from "react";

import Header from "../Layouts/header";
import classes from "./main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <Header />
      <input placeholder="Enter an address, neighbourhood, city or zip code" />

      {/* <h1>The dream home. Own it.</h1> */}
    </div>
  );
};

export default Main;
