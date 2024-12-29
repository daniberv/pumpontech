import { useState } from 'react';
import styles from './GuideV1.module.scss';
import { StepOne } from './StepOne';
import { StepFour } from './StepFour';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

export const GuideV1 = ({ complete }) => {
    const [step, setStep] = useState(1);

    switch(step) {
        case 1:
            return <div className={styles.body}><StepOne onClick={() => setStep(2)} /></div>
        case 2:
            return <div className={styles.body}><StepTwo onClick={() => setStep(3)} /></div>
        case 3:
            return <div className={styles.body}><StepThree onClick={() => setStep(4)} /></div>
        case 4:
            return <div className={styles.body}><StepFour onClick={complete} /></div>
        default:
            return <div className={styles.body}></div>
    }
}