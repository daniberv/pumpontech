import styles from './PointsRecord.module.scss'

export const PointsRecord = ({ item }) => {
    return (
        <div className={styles.row}>
            <div className={styles.date}>{item?.createdAt}</div>
            <div className={styles.type}>{item?.type}</div>
            <div className={styles.amount}>{item?.amount} $PP</div>
        </div>
    )
}