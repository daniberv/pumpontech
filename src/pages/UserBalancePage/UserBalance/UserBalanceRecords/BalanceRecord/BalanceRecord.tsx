import styles from './BalanceRecord.module.scss'

export const BalanceRecord = ({ item }) => {
    const itemType = item?.type === "deposit" ? "Пополнение" : "Вывод"

    return (
        <div className={styles.row}>
            <div className={styles.date}>{item?.createdAt}</div>
            <div className={styles.type}>{itemType}</div>
            <div className={styles.amount}>{item?.amount}</div>
            <div className={styles.currency}>{item?.currency}</div>
            <div className={styles[item?.status]}></div>
        </div>
    )
}