import React from 'react';
import styles from './nav.module.css'
function Nav() {
    function vibrate(){
        navigator.vibrate(50);
    }


    return (
        <div className={styles.nav}> 
            <h1>Foodiees</h1>
            <div> 
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quote</a></li>
                    <li><a href="#">Restaurants</a></li>
                    <li><a href="#">Foods</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
            <div className={styles.btns}>
                <button className={styles.gsbtn}>Get Started</button>
                <img onClick={vibrate} src="/menu.png" alt="" />
            </div>
        </div >
    )
}

export default Nav;