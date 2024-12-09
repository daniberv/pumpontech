import { useState, type FC } from 'react';

import { UserPage } from '@/components/UserPage';
import { FeedLinks } from './FeedLinks';
import { Feeds } from '@/components/Feeds';

export const IndexPage: FC = () => {
    const [mode, setMode] = useState("feed");

    const changeMode = (value) => {
        setMode(value)
    }

    return (
        <UserPage back={false}>
            <FeedLinks mode={mode} onChange={changeMode} />
            <Feeds mode={mode} />
        </UserPage>
    );
};