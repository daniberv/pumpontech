import styles from './JettonHolders.module.scss';
import { observer } from "mobx-react-lite";
import { Preloader } from '../Preloader';

export const JettonHolders = observer(({ jetton }) => {
    if (!jetton.holders) {
        return <Preloader />
    }
    return (
        <div className={styles.wrapper}>
            {jetton.holders?.items.map(holder => (
                <div className={styles.item}>
                    <div className={styles.address}>{holder.address}</div>
                    <div className={styles.percentage}>{holder.percentage}%</div>
                </div>
            ))}
        </div>
    )
})