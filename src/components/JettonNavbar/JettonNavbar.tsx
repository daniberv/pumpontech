import { Link } from 'react-router-dom'
import styles from './JettonNavbar.module.scss'

export const JettonNavbar = ({ title, symbol }) => {
    return (
        <div className={styles.navbar}>
            <div><Link to="/jettons">
                <img src="/assets/arrow-left.png" alt="" />
            </Link></div>
            <div className={styles.title}>{title}</div>
            <div className={styles.symbol}>{symbol}</div>
        </div>
    )
}