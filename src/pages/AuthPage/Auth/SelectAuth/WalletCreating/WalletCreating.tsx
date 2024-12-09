import styles from './WalletCreating.module.scss'

export const WalletCreating = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logos}>
                <img src="/gif/purple_pumpon.gif" alt="" className={styles.anim} />
            </div>
            <div className={styles.label}>
                Generating a new wallet address...
            </div>
        </div>
    )
}