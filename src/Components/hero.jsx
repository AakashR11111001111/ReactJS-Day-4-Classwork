import React from 'react'
import styles from './hero.module.css'
function Hero() {
  return (
    <>
        <div className={styles.hero}>
            <div className={styles.inner}>
                <h1>Let us find your <br /><span>Forever Food.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br></br>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className={styles.btns}>
                  <button className={styles.btn1}>Search Now</button> <button className={styles.btn2}>Know More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero;