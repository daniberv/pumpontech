import { useState } from 'react';
import styles from './Auth.module.scss';
import { SelectAuth } from './SelectAuth';

export const Auth = () => {
    const [step, setStep] = useState('select');

    const renderStep = () => {
        switch(step) {
            case 'select':
                return <SelectAuth />;
            default:
                return null;
        }
    }

    return (
        <div className={styles.wrapper}>
            {renderStep()}
        </div>
    )
}