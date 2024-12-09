import { Link } from "react-router-dom"

import styles from './UserFooter.module.scss'

export const UserFooter = () => {
    return (
        <div className={styles.footer}>
            <Link to="/jettons">
                <img src="/assets/flash-icon.png" alt="" />
                <span>Explore</span>
            </Link>
            <Link to="/referral">
                <img src="/assets/crown-icon.png" alt="" />
                <span>Referral</span>
            </Link>
            <Link to="/points">
                <img src="/assets/diamond-icon.png" alt="" />
                <span>Points</span>
            </Link>
            <Link to="/dev">
                <img src="/assets/rocket-icon.png" alt="" />
                <span>Dev</span>
            </Link>
            <Link to="/faq">
                <img src="/assets/info-icon.png" alt="" />
                <span>FAQ</span>
            </Link>
        </div>
    )
}