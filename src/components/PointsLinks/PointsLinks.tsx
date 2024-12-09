import styles from './PointsLinks.module.scss'

export const PointsLinks = ({ active, onChange }) => {
    return (
        <div className={styles.user_links}>
            <div className={active === "level" ? "active tab-link" : " tab-link"} onClick={() => onChange('level')}>Level</div>
            <div className={active === "available" ? "active tab-link" : " tab-link"} onClick={() => onChange('available')}>Available</div>
            <div className={active === "completed" ? "active tab-link" : " tab-link"} onClick={() => onChange('completed')}>Completed</div>
        </div>
    )
}