import React from 'react'
import { PropertyListing } from '../../components'

import { getData } from '../../sanity/lib/client'

const property = async() => {
    const data = await getData()
    // console.log(data)
  return (
    <div className="property-list">
        {data.products?.map((property) => <PropertyListing  key={property._id} propertyList={property} />)}
    {/* <PropertyListing  /> */}
    </div>
  )
}

export default property;