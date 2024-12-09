import type { FC } from 'react';

import { UserPage } from '@/components/UserPage';
import { UserLinks } from '@/components/UserLinks';
import { UserPoints } from './UserPoints';

export const UserPointsPage: FC = () => {
    return (
        <UserPage back={true}>
            <UserLinks />
            <UserPoints />
        </UserPage>
    );
};