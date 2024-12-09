import styles from './TonDeposit.module.scss'

export const TonDeposit = () => {
    return (
        <div className={styles.wrapper}>
            <div className="input">
                {/* <label htmlFor="deposit_ton">TON</label> */}
                <input id="deposit_ton" type="text" />
            </div>

            <button className="btn btn_white">Продолжить</button>
        </div>
    )
}