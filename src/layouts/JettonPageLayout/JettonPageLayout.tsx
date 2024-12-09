import { useNavigate } from 'react-router-dom';
import { backButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import { JettonNavbar } from '@/components/JettonNavbar';

export function JettonPageLayout({ jetton, children }) {
    const navigate = useNavigate();

    useEffect(() => {
        backButton.show();
        return backButton.onClick(() => {
            navigate('/feed');
        });
    }, []);

    return <>
        <JettonNavbar title={jetton?.title} symbol={jetton?.symbol} />
        <div className='jetton-page'>
            {children}
        </div>
    </>;
}