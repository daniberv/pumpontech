import styles from './BalanceEdit.module.scss'
import { DepositModes } from './DepositModes'

export const BalanceEdit = ({ isOpened, onCancel }) => {

    return (
        <div className={`${styles.wrapper} ${isOpened ? styles.opened : ''} `}>
            <div className={`${styles.pseudo_wrapper} ${isOpened ? styles.opened : ''} `} onClick={onCancel}></div>
            <div className={`${styles.container} ${isOpened ? styles.opened : ''} `} onClick={(e) => e.stopPropagation()}>
                <DepositModes />
            </div>
        </div>
    )
}