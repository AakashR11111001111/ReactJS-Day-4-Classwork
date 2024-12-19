import styles from './QCard.module.css'
function QCard(prop){
    return (
        <>
            <div className={styles.card}><h4>{prop.dummy}</h4><p><em>{prop.writer}</em></p></div>
        </>
    )
}

export default QCard