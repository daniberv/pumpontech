import { useAuth } from '@/providers/AuthProvider'
import styles from './Balance.module.scss'
import { Link } from 'react-router-dom';

export const Balance = () => {
    const { userWallet, userTonBalance, userPointsBalance } = useAuth();

    if (!userWallet) {
        return <Link to='/auth' className={styles.connect}>Connect</Link>
    }
    
    return (
        <div className={styles.user_balance}>
            <div>TON: {userTonBalance}</div>
            <div>Points: {userPointsBalance}</div>
        </div>
    )
}