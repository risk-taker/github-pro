import React from 'react'
import styles from './Landing.module.css'
import { useState } from 'react'
import AddNewRepo from '../../components/AddNewRepo/AddNewRepo';

const Landing = () => {
    const [showAddNewRepo, setShowAddNewRepo] = useState(false);
    function popup() {
        setShowAddNewRepo(true)
    }

    return (
        <>
            <div className={styles.repoWrapper}>
                <div className={styles.repoLeft}>
                    <div className={styles.repoHeadingWrapper}>
                        <h3 style={{ fontSize: 'larger', fontWeight: 'bold', marginLeft: "2rem" }}>Repositories</h3>
                        <button className={styles.addBtn} onClick={popup}><img src="/images/add.png" alt="" /><span className={styles.addNew} >New</span></button>
                    </div>
                    <div className={styles.repoNameMain}>
                        <h4 className={styles.repoName}>Repo Name</h4>
                        <h5 className={styles.repoDesc}>Repo Description</h5>
                    </div>
                </div>
                <div className={styles.repoRight}>
                    <button className={styles.deleteBtn}>Delete</button>
                    <div className={styles.rightHero} >
                        <button className={styles.button}>Branches</button>
                        <button className={styles.button}>Issues</button>
                        <div className={styles.repoContent}>
                            <h4>This is content of branches!</h4>
                        </div>
                    </div>
                </div>
            </div>
            {showAddNewRepo && <AddNewRepo onClose={() => { setShowAddNewRepo(false) }} />}
        </>
    )
}

export default Landing
