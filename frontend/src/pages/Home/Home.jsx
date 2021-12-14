import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import styles from './Home.module.css'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();


    async function signup() {
        try {
            navigate('/signup')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='cardWrapper'>
            <Card>
                <div className={styles.heading}>
                    <img src="/images/wavinghand.png" alt="hand" className={styles.img} />
                    <h4>  Welcome to Github pro</h4>
                </div>
                <p className={styles.paragraph}>
                    we're working hard to get Github pro ready for everyone! While we wrap up the youches. we're adding people gradually to make sure nothing break
                </p>
                <button className={styles.button} onClick={signup}>Get started!</button>
                <Link to="/login" className="link"><h4 className={`${styles.link}`}>Already have account? sign in</h4></Link>
            </Card>
        </div>
    )
}

export default Home
