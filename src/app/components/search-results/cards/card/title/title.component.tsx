import React from 'react'
import styles from './title.module.scss'

const Title = ({hotelName, hotelLocation}) => {
  return (
    <div className={styles.cardTitles}>
        <h2>{hotelName}</h2>
        <p>{hotelLocation}</p>
    </div>
  )
}

export default Title