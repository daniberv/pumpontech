import { useNavigate } from 'react-router-dom';
import { backButton } from '@telegram-apps/sdk-react';
import { PropsWithChildren, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { UserFooter } from './UserFooter';

export function UserPage({ children }: PropsWithChildren<{
/**
   * True if it is allowed to go back from this page.
   */
    back?: boolean
}>) {
    const navigate = useNavigate();

    useEffect(() => {
        backButton.show();
        return backButton.onClick(() => {
            navigate(-1);
        });
    }, []);

    return <>
        <Navbar />
        <div className='page'>
            {children}
        </div>
        <UserFooter />
    </>;
}