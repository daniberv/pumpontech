import { useState } from 'react'
import styles from './Deposit.module.scss'
import { DepositMode } from './DepositMode';

export const Deposit = () => {
    const [mode, setMode] = useState("ton");

    const tonMode = () => {
        setMode("ton")
    }

    const rubMode = () => {
        setMode("rub")
    }

    return (
        <div>
            <div className={styles.links}>
                <button className={`${styles.link} ${mode === "ton" ? styles.active : ""}`} onClick={tonMode}>TON</button>
                <button className={`${styles.link} ${mode === "usdc" ? styles.active : ""}`} onClick={rubMode}>RUB</button>
            </div>

            <DepositMode mode={mode} />
        </div>
    )
}