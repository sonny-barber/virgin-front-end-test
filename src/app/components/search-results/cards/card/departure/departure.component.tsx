import React from 'react'
import styles from './departure.module.scss'
import Image from 'next/image';
import { formatDate } from './utils';

const Departure = ({departDate}) => {
  return (
    <div>
        <div className={styles.departDate}>
            <Image src="vah-calendar.svg" alt="Virgin Calendar Icon" width={20} height={20} priority />
            <p>{formatDate(departDate)}</p>
        </div>
    </div>
  )
}

export default Departure