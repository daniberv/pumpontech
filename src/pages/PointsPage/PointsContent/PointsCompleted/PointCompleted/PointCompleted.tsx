import styles from './PointCompleted.module.scss'

export const PointCompleted = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>{item?.task}</div>
            <div className={styles.data}>
                <div className={styles.reward}>{item?.reward_amount} $PP</div>
                <div className={styles.success}></div>
            </div>
        </div>
    )
}