import { useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite";

import styles from './WalletMnemonics.module.scss'

export const WalletMnemonics = observer(({ readonly }) => {
    const { user } = useStore();

    const label = readonly ? 'Wallet has been created!' : 'Restoring';

    const next = () => {
        user.finishOnboarding();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
                <div className={styles.label}>{label}</div>
                <div className={styles.header}>Your Mnemonics</div>

                <div className={styles.words}>
                    {user?.mnemonics?.map(item => 
                        <div className={styles.word} key={item}>{item}</div>
                    )}
                </div>

                <div className={styles.save_it}>
                    Save this words!
                </div>
                <div className={styles.button_wrapper}>
                    <button className={styles.next} onClick={next}>Proceed</button>
                </div>
            </div>
        </div>
    )
});