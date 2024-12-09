import styles from './UserBalance.module.scss'
import { UserBalanceRecords } from './UserBalanceRecords'

export const UserBalance = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.balance}>90000.0012</div>

            <div className={styles.multiplier_line}>
                <div className={styles.multiplier_wrapper}>
                    <div className={styles.multiplier_label}>множитель</div>
                    <div className={styles.multiplier_value}>1 поинт/час</div>
                </div>
                <div className={styles.balance_currency}>TON</div>
            </div>

            <UserBalanceRecords />
        </div>
    )
}