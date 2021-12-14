import React from 'react'
import styles from './AddNewRepo.module.css'


const AddNewRepo = ({ onClose }) => {
    return (
        <div className={styles.addnewrepomask}>
            <div className={styles.addNewRepoBody}>
                <button className={styles.cross} onClick={onClose}><img src="/images/cross.png" alt="cross" /></button>
                <h2 className={styles.heading}>Add New Repository</h2>
                <h6 className={styles.owner}>Repository Name</h6>
                <input type="text" className={styles.textbox} />
                <h6 className={styles.owner}>Repository Description</h6>
                <input type="text" className={styles.textbox} />
                <div className={styles.btnCenter}><button className={styles.addbtn}>Add</button></div>
            </div>
        </div>
    )
}

export default AddNewRepo
