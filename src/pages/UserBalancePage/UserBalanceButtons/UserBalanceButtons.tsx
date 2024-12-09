import { useState } from "react"
import { BalanceEdit } from "./BalanceEdit"

import styles from "./UserBalanceButtons.module.scss"

export const UserBalanceButtons = () => {
    const [isOpened, setIsOpened] = useState(false);

    const deposit = () => {
        setIsOpened(true);
    }

    const cancel = () => {
        setIsOpened(false)
    }

    return (
        <>
            <div className={styles.wrapper}>
                <button className={styles.deposit} onClick={deposit}>Пополнить</button>
                <button className={styles.withdraw}>Вывести</button>
            </div>
            <BalanceEdit isOpened={isOpened} onCancel={cancel} />
        </>
    )
}