import type { FC } from 'react';

import { UserPage } from '@/components/UserPage';
import { UserLinks } from '@/components/UserLinks';
import { UserBalanceButtons } from './UserBalanceButtons';
import { UserBalance } from './UserBalance';

export const UserBalancePage: FC = () => {
    return (
        <UserPage back={true}>
            <UserLinks />
            <UserBalanceButtons />
            <UserBalance />
        </UserPage>
    );
};