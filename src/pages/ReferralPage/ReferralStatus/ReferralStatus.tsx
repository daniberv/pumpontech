import { observer } from 'mobx-react-lite';
import styles from './ReferralStatus.module.scss'
import { useStore } from '@/providers/StoreProvider';

export const ReferralStatus = observer(() => {
    const { user } = useStore();

    const level = () => {
        switch('standart') {
            case 'standart':
                return 'standart level';
            default:
                return '-'
        }
    }
    return (
        <div className={styles.wrapper}>
            {level(user?.ref_level)}
        </div>
    )
})