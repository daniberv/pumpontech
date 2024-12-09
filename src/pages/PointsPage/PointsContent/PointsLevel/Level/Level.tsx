import { useStore } from '@/providers/StoreProvider';
import styles from './Level.module.scss'

export const Level = ({ item, color }) => {
    const { user } = useStore();
    const status = user?.points_level === item.status ? 'Your level' : '-';

    return (
        <div className={styles.wrapper}>
            <div className={styles.title} style={{ color: color }}>{item.title}</div>
            <div className={styles.rate}>{item.rate}@24h</div>
            <div className={styles.status}>{status}</div>
        </div>
    )
}