import styles from './JettonCover.module.scss'

export const JettonCover = ({ image, booster, isGainer }) => {
    return (
        <div className={styles.wrapper}>
            <img src={`/${image}`} alt="" className={styles.image} />
            {!!booster && <div className={styles.booster}>booster <span>x32</span></div>}
            {!!isGainer && <div className={styles.gainer}>GAINER</div>}
        </div>
    )
}