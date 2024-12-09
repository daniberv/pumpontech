import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backButton } from '@telegram-apps/sdk-react';

import styles from './AuthPage.module.scss';
import { Auth } from "./Auth";

export const AuthPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        backButton.show();
        return backButton.onClick(() => {
            navigate('/feed');
        });
    }, []);
    
    return (
        <div className={styles.wrapper}>
            <Auth />
        </div>
    )
}