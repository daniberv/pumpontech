import styles from './Preloader.module.scss'

export const Preloader = () => {
    return (
        <div className={styles.wrapper}>
            <img src="/gif/purple_pumpon.gif" alt="" />
        </div>
    )
}