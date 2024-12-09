import { NavLink } from "react-router-dom"

import styles from './UserLinks.module.scss'

export const UserLinks = () => {
    return (
        <div className={styles.user_links}>
            <NavLink to="/user/balance" className={({ isActive }) => isActive ? "active tab-link" : " tab-link"}>Balance</NavLink>
            <NavLink to="/user/points" className={({ isActive }) => isActive ? "active tab-link" : " tab-link"}>Points</NavLink>
            <NavLink to="/user/profile" className={({ isActive }) => isActive ? "active tab-link" : " tab-link"}>Settings</NavLink>
        </div>
    )
}