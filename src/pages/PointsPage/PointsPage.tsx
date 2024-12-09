
import { UserPage } from '@/components/UserPage'
import styles from './PointsPage.module.scss'
import { useFetchUser, useStore } from '@/providers/StoreProvider'
import { useState } from 'react'
import { PointsLinks } from '@/components/PointsLinks'
import { PointsContent } from './PointsContent'

export const PointsPage = () => {
    const { user } = useStore();

    const [activeLink, setActiveLink] = useState('level');

    useFetchUser();

    return (
        <UserPage back={true}>
            <div className={styles.season}>Season 1</div>
            <PointsLinks active={activeLink} onChange={setActiveLink} />

            <PointsContent active={activeLink} />
        </UserPage>
    )
}