import React from 'react'
import styles from './Card.module.css'
import { NavLink as Link } from 'react-router-dom'

const Card = ({ children }) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Card
