"use Client";

import React from "react";
import sellPics from "../public/home1.jpg";
import Commercial from "../public/commercial.jpg"
import Image from "next/image";

const LandingPage = ({
  bannerData: { desc, _id, buttonText1, buttonText2 },
}) => {
  console.log(desc);

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
            <button className="sell">{buttonText1}</button>
            <button className="buy">{buttonText2}</button>
          </div>
        </div>
        <div>
          <Image src={sellPics} className="sell-image" />
        </div>
      </div>

      <div id="own-house" className="owner">
        <div className="owner-text">
          <h1>Do you own a home ?</h1>
          <h2>Join our partner landlord and agents</h2>
          <p>Earn big in rental income from the best tenants in Nigeria</p>
          <button className="own-button">Get Started</button>
        </div>
      </div>

      <div id="other-services" className="services">
        <div className="interior">
          <div className="interior-text">
            <h3>INTERIOR</h3>
            <p>Explore our interior design services</p>
            <button className="service-button">Visit CROWN interior</button>
          </div>
        </div>
        <div className="buildings">
          <div className="luxury">
            <div className="luxury-text">
              <h3>LUXURY</h3>
              <p>Explore featured luxury homes & Estates</p>
              <button className="service-button">Visit CROWN luxury</button>
            </div>
          </div>
          <div className="commercial">
            <div className="commercial-text">
              <h3>COMMERCIAL</h3>
              <p>A Global brand with local representation specializing in
              Commercial Real Estate spaces.</p>
              <button className="service-button">Visit CROWN spaces</button>
            </div>
          </div>
        </div>
      </div>

      <div className="next">
      <div className="next-text">
        <h1>What Comes Next? You Tell Us</h1>
        <p>Let the CROWN® brand help you build the business of your dreams.</p>
      </div>
      <div>
        <Image className="next-img" src={Commercial} alt="crown office" />
      </div>
      <div className="buttons">
        <button className="what-next-button">Franchise ownerships</button>
        <button className="what-next-button">Careers in real estate</button>
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
    </div>
  );
};

export default LandingPage;
