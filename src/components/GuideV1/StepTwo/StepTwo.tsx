import styles from './StepTwo.module.scss'

import Lottie from 'react-lottie';
import animationData1 from './pumpon_sad_00.json'

const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: animationData1,
};

export const StepTwo = ({ onClick }) => {
    return <div className={styles.wrapper}>
        <Lottie options={defaultOptions1}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
        />

        <p className={styles.p}>Pumpon fixes broken launchpads<br />perfect time to launch<br />and receive rewards and points!</p>
        <button onClick={onClick} className='btn btn-purple'>Next!</button>
    </div>
}