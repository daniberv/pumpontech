import styles from './JettonTransactions.module.scss';
import { observer } from "mobx-react-lite";
import { Preloader } from '../Preloader';

export const JettonTransactions = observer(({ jetton }) => {
    if (!jetton.transactions) {
        return <Preloader />
    }
    return (
        <div className={styles.wrapper}>
            {jetton.transactions?.items.map(holder => (
                <div className={styles.item}>
                    <div className={styles.address}>{holder.buyer}</div>
                    <div className={styles.percentage}>{holder.symbol}</div>
                </div>
            ))}
        </div>
    )
})