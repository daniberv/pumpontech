import styles from './UserPoints.module.scss'
import { UserPointsRecords } from './UserPointsRecords'

export const UserPoints = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.balance}>90000.0012</div>

            <div className={styles.multiplier_line}>
                <div className={styles.balance_currency}>$PP</div>
            </div>

            <UserPointsRecords />
        </div>
    )
}