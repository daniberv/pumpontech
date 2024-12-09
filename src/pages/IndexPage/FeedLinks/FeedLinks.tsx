import styles from './FeedLinks.module.scss'

export const FeedLinks = ({ mode, onChange }) => {
    const go = (value: "feed" | "tags" | "rockets" | "favorites") => {
        onChange(value)
    }

    return (
        <div className={styles.links}>
            <div className={mode === "feed" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => go("feed")}>Лента</div>
            <div className={mode === "tags" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => go("tags")}>Тэги</div>
            <div className={mode === "rockets" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => go("rockets")}>Ракеты</div>
            <div className={mode === "favorites" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => go("favorites")}>Избранное</div>
        </div>
    )
}