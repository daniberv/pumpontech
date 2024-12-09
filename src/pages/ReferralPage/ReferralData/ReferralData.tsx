
import { observer } from 'mobx-react-lite'
import styles from './ReferralData.module.scss'
import { useStore } from '@/providers/StoreProvider'

export const ReferralData = observer(() => {
    const { user } = useStore();

    return (
        <>
            <div className={styles.first_line}>
                <div className={styles.total_referral_block}>
                    <div className={styles.value}>{user?.total_referrals}</div>
                    <div className={styles.label}>Total Referrals</div>
                </div>
                <div className={styles.total_ton_block}>
                    <div className={styles.value}>{user?.total_referrals_ton}</div>
                    <div className={styles.label}>Total TON Earned</div>
                </div>
            </div>
            <div className={styles.second_line}>
                <div className={styles.total_points_block}>
                    <div className={styles.value}>{user?.total_referrals_points}</div>
                    <div className={styles.label}>Total PumPoints Earned</div>
                </div>
            </div>
        </>
    )
})