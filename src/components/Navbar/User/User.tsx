import { Link } from 'react-router-dom';
import styles from './User.module.scss'
import { useAuth } from '@/providers/AuthProvider';

export const User = () => {
    const { userName } = useAuth();

    return (
        <Link to="/user/balance">
            <div className={styles.user}>
                <div className={styles.user_photo}></div>
                <div className={styles.user_name}>{userName}</div>
            </div>
        </Link>
    )
}