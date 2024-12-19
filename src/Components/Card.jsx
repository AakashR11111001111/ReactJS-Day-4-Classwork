import React from 'react'
import styles from './Card.module.css';

function Card(prop){
    return (
        <>
            <div className={styles.card}>
                <p>{prop.cont}</p>
                <div className={styles.prof}>
                    <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                    <div>
                        <h1>Gladis Lennon</h1>
                        <h3>Head of SEO</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card