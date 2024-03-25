import React from "react";
import Image from "next/image";

import Card from "../ui/card";

import { dataset, projectId } from "../lib/env";

const PropertyListing = async ({
  propertyList: { image, name, price, details, _id },
}) => {
  // console.log(image);
 
  const ImageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${image[0].asset._ref
    .replace("image-", "")
    .replace("-webp", ".webp")
    .replace("-jpg", ".jpg")}`;

  return (
    <div >
      <Card className="property" key={_id}>
        <img src={ImageUrl} width={200} height={200} />
        <h1>{name}</h1>
        <p>{price}</p>
        {/* <p>{property.location}</p> */}
        <p>{details}</p>
      </Card>
    </div>
  );
};

export default PropertyListing;
