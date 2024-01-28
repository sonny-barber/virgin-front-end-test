import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image';
import Title from './title/title.component';
import Ratings from './ratings/ratings.component';
import Board from './board/board.component';
import Prices from './prices/prices.component';
import Departure from './departure/departure.component';

const Card = ({ holiday }: { holiday: any }) => {
  return (
    <div className={styles.card}>
        {holiday.hotel.content.images.length > 0 && (
        <Image
            className={styles.cardImage}
            loading = 'lazy'
            src={`https:${holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}`}
            alt={holiday.hotel.name}
            width='290'
            height='212'/>            
        )}

        <Title hotelName={holiday.hotel.name} hotelLocation={holiday.hotel.content.parentLocation}/>
        <Ratings hotelStars={holiday.hotel.content.starRating}/>
        <Board boardBasis={holiday.hotel.boardBasis}/>
        <Prices pricePerPerson={holiday.pricePerPerson} priceTotal={holiday.totalPrice}/>
        <Departure departDate={holiday.departureDate}/>
    </div>
  )
}

export default Card;
