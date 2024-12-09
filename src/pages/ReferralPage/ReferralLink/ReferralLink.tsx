import toast from 'react-hot-toast'
import styles from './ReferralLink.module.scss'
import { useStore } from '@/providers/StoreProvider';
import { observer } from 'mobx-react-lite';

export const ReferralLink = observer(() => {
    const { user } = useStore();

    const ref_link = () => {
        return `https://pumpon.tech/r?id=${user?.ref_link}`
    }
    
    const copy = (e) => {
        const textToCopy = `https://pumpon.tech/r?id=${user?.ref_link}`;
        const tempInput = document.createElement("textarea");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        try {
            document.execCommand("copy");
            toast.success("Copied!");
        } catch (err) {
            toast.error("Error!");
            console.error("Error copying text: ", err);
        }

        document.body.removeChild(tempInput);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.link_container}>
                <div className={styles.label}>Your Ref Link</div>
                <div className={styles.link}>{ref_link()}</div>
            </div>
            <div className={styles.button_wrapper}>
                <button className={styles.button} onClick={copy}>Copy</button>
            </div>
        </div>
    )
})