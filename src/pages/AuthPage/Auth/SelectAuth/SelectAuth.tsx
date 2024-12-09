import { TonConnectButton } from '@tonconnect/ui-react'
import styles from './SelectAuth.module.scss'
import { useStore } from '@/providers/StoreProvider'
import { WalletCreating } from './WalletCreating';
import { observer } from 'mobx-react-lite';
import { WalletMnemonics } from './WalletMnemonics';

export const SelectAuth = observer(() => {
    const { user } = useStore();

    console.log('ASD', user?.isWalletCreated)

    const create = () => {
        user.createWallet();
    }

    if (user?.isWalletCreating) {
        return <WalletCreating />
    }

    if (user?.isWalletCreated && user?.mnemonics?.length) {
        return <WalletMnemonics readonly={true} />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logos}>
                <img src="/gif/gray_pumpon.gif" alt="" className={styles.anim} />
                <img src="/assets/pumpon.png" alt="" className={styles.logo} />
            </div>
            <div className={styles.buttons}>
                <TonConnectButton />
                <button className={styles.create} onClick={create}>Create wallet</button>
                <button className={styles.restore}>Restore wallet</button>
            </div>
        </div>
    )
});