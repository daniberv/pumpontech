import styles from './JettonPoints.module.scss'

export const JettonPoints = ({ points, grow24 }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.left_label}>Поинты за покупку</div>
                <div className={styles.left_value}>{points} $PP</div>
            </div>
            <div className={styles.right}>
                <div className={styles.right_label}>Рост</div>
                <div className={styles.right_value}>{grow24}%</div>
            </div>
            {points} {grow24}
        </div>
    )
}