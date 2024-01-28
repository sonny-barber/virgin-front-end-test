import React from 'react'
import { generateStars } from './utils'

const Ratings = ({hotelStars}) => {
  return (
    <div>
        {generateStars(hotelStars)}
    </div>
  )
}

export default Ratings