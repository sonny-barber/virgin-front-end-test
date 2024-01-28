import React from 'react'
import styles from './prices.module.scss'
import {formatCurrency} from './utils';

const Prices = ({pricePerPerson, priceTotal}) => {
  return (
    <div className={styles.cardPrices}>
        <span className={styles.pricePerPerson}>{formatCurrency(pricePerPerson)}</span>
        <p className={styles.priceTotal}>{formatCurrency(priceTotal)}</p>
    </div>
  )
}

export default Prices