import React from 'react'
import styles from './Navigation.module.css'
import { NavLink as Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <Link to="/" className="link">
                <h2 className={`${styles.logo} container`}>Github pro</h2>
            </Link>
        </nav>
    )
}

export default Navigation
