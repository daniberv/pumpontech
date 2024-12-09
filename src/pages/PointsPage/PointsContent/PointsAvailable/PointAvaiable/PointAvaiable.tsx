import styles from './PointAvaiable.module.scss'

export const PointAvaiable = ({ item, completed }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>{item?.task}</div>
            <div className={styles.data}>
                <div className={styles.reward}>{item?.reward_amount} $PP</div>
                <div className={styles.pending}></div>
            </div>
        </div>
    )
}