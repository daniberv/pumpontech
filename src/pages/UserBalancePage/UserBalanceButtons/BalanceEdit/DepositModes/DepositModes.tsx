import { useState } from "react"

import styles from './DepositModes.module.scss'
import { Mode } from "./Mode";

export const DepositModes = () => {
    const [mode, setMode] = useState("deposit");

    const depositMode = () => {
        setMode("deposit")
    }

    const withdrawMode = () => {
        setMode("withdraw")
    }

    return (
        <>
            <div>
                <button className={`${styles.link} ${mode === "deposit" ? styles.active : ""}`} onClick={depositMode}>Пополнить</button>
                <button className={`${styles.link} ${mode === "withdraw" ? styles.active : ""}`} onClick={withdrawMode}>Вывести</button>
            </div>
            <Mode mode={mode} />
        </>
    )
}