"use Client";

import React from "react";
import { getData } from "../lib/client";

const LandingPage = ({
    bannerData: {
        desc,
        _id,
        buttonText1,
        buttonText2,
    }
}) => {

    console.log(desc)

  return (
    <div>
      <div className="houses" id="house">
        <div className="summary">
          <h1>What's Happening in Your Area</h1>
          <p>
            If you're looking for a new home, we'll help you find luxury,
            comfort and everything else you would love.
          </p>
          <h2>Lagos, NG</h2>
        </div>
      </div>

      <div id="sell-house" className="sell-house">
      
          <div className="sell-house-info">
            <h1>Ready to make a move ?</h1>
            <p>{desc}</p>
            <div className="sell-buy">
                <button className="sell">
                    {buttonText1}
                </button>
                <button className="buy">
                    {buttonText2}
                </button>
            </div>
          </div>
          <div>
            <img />
          </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
