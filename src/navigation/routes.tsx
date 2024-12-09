import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage';
import { UserBalancePage } from '@/pages/UserBalancePage';
import { UserProfilePage } from '@/pages/UserProfilePage';
import { UserPointsPage } from '@/pages/UserPointsPage';
import { FaqPage } from '@/pages/FaqPage';
import { DevPage } from '@/pages/DevPage';
import { JettonPage } from '@/pages/JettonPage';
import { AuthPage } from '@/pages/AuthPage';
import { ReferralPage } from '@/pages/ReferralPage';
import { PointsPage } from '@/pages/PointsPage';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: '/', Component: IndexPage },
    { path: '/user/balance', Component: UserBalancePage },
    { path: '/user/points', Component: UserPointsPage },
    { path: '/referral', Component: ReferralPage },
    { path: '/points', Component: PointsPage },
    { path: '/user/profile', Component: UserProfilePage },
    { path: '/jettons/:jettonId', Component: JettonPage },
    { path: '/faq', Component: FaqPage },
    { path: '/dev', Component: DevPage },
    { path: '/auth', Component: AuthPage },
];
