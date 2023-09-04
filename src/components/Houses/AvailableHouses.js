import React from "react";

import HouseItem from "./HouseItem";
import pics from '../../assets/house1.jpg'
import pics2 from '../../assets/house2.webp';
import pics3 from '../../assets/house3.webp';
import pics4 from '../../assets/house4.webp';




const DUMMY_HOUSES = [
  {
    id: "h1",
    imgURL: pics,
    price: "1,200,000",
    description: "2-Bedroom 2-Bathroom",
    location: "Lekki phase one",
  },
  {
    id: "h2",
    imgURL: pics2,
    price: "1,200,000",
    description: "2-Bedroom 2-Bathroom",
    location: "Lekki phase one",
  },
  {
    id: "h3",
    imgURL: pics3,
    price: "1,200,000",
    description: "2-Bedroom 2-Bathroom",
    location: "Lekki phase one",
  },
  {
    id: "h4",
    imgURL: pics4,
    price: "1,200,000",
    description: "2-Bedroom 2-Bathroom",
    location: "Lekki phase one",
  },
];

const AvailableHouses = () => {
  const housesList = DUMMY_HOUSES.map((house) => (
    <HouseItem
      key={house.id}
      image={house.imgURL}
      price={house.price}
      description={house.description}
      location={house.location}
    />
  ));

  return (
    <div style={{display: 'flex', flexDirection:"row", gap:"60px", marginLeft:"80px"}}>
        {housesList}
    </div>
      
    
  );
};

export default AvailableHouses;
