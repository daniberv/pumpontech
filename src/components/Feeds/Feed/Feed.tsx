import { useState } from 'react'
import styles from './Feed.module.scss'
import { FeedJettons } from './FeedJettons';
import { GridToggler } from '@/components/GridToggler';

export const Feed = () => {
    const [filter, setFilter] = useState("default");

    const changeFilter = (value: "default" | "gainers" | "cap") => {
        setFilter(value)
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.links}>
                    <div className={filter === "default" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => changeFilter("default")}>Дефолт</div>
                    <div className={filter === "gainers" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => changeFilter("gainers")}>Гейнеры</div>
                    <div className={filter === "cap" ? `${styles.link} ${styles.active}` : styles.link} onClick={() => changeFilter("cap")}>Капа</div>
                </div>
                <div className={styles.sort}>
                    <GridToggler />
                </div>
            </div>

            <FeedJettons filter={filter} />
        </div>
    )
}