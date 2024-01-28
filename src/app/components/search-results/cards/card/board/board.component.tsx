import React from 'react'
import styles from './board.module.scss'

const Board = ({boardBasis}) => {
  return (
    <div>
        <p className={styles.boardBasis}>{boardBasis}</p>
    </div>
  )
}

export default Board