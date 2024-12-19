import React from "react";
import styles from './page1.module.css';
function P1(){
    return (
        <>
            <div className={styles.main}>
                <div className={styles.inner}>
                    <div className={styles.innerL}></div>
                    <div className={styles.innerR}></div>
                    <div className={styles.content}>
                        <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                        <div><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2><br /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laboriosam, itaque autem illum enim beatae et qui sed quas saepe aliquam nulla ullam magnam ex. Eum repellendus, ea voluptate nam expedita consequuntur commodi quam aliquid, eligendi ipsam dolorem. Ipsam sint cupiditate aperiam. Aliquid alias rerum eaque, modi reprehenderit consectetur delectus!</p><br /><button className={styles.gitBtn}>Get in Touch</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default P1;