
import { UserPage } from '@/components/UserPage'
import styles from './ReferralPage.module.scss'
import { ReferralStatus } from './ReferralStatus'
import { ReferralLink } from './ReferralLink'
import { ReferralData } from './ReferralData'
import { useFetchUser, useStore } from '@/providers/StoreProvider'

export const ReferralPage = () => {
    const { user } = useStore();

    useFetchUser();

    return (
        <UserPage back={true}>
            <ReferralStatus />
            <ReferralLink />
            <ReferralData />
        </UserPage>
    )
}