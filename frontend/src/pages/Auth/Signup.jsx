import React from 'react'
import Card from '../../components/shared/Card/Card'
import styles from './Auth.module.css'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate();
    async function homePage() {
        try {
            navigate('/landing')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='cardWrapper'>
            <Card>
                <div className={styles.left}>
                    <h3>Enter your email id</h3>
                    <input type="email" className={styles.textBox} />
                    <h3>Enter Password</h3>
                    <input type="password" className={styles.textBox} />
                    <h3>Enter Confirm Password</h3>
                    <input type="password" className={styles.textBox} />
                    <button className={styles.button} onClick={homePage}>Sign up</button>
                </div>
            </Card>
        </div>
    )
}

export default Signup
