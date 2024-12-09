import styles from './JettonBondingProgress.module.scss'

export const JettonBondingProgress = ({ progress }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>Bonding Curve</div>
            <div className={styles.outer}>
                <div className={styles.star} style={{ left: `calc(-350px + ${progress}%)` }}></div>
                <div className={styles.container}>
                    <div className={styles.inner} style={{ width: `${progress}%`}}></div>
                    <div className={styles.progress}>{progress}%</div>
                </div>
            </div>
        </div>
    )
}