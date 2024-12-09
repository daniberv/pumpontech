import { UserPage } from "@/components/UserPage"

import styles from './DevPage.module.scss'
import { CreateJetton } from "@/components/CreateJetton"
import { useAuth } from "@/providers/AuthProvider"
import { TonNeeded } from "@/components/TonNeeded"

export const DevPage = () => {
    const { userWallet } = useAuth();

    return (
        <UserPage back={true}>
            <h1 className={styles.h1}>Создать жеттон</h1>

            {userWallet ? <CreateJetton /> : <TonNeeded />}
            
        </UserPage>
    )
}