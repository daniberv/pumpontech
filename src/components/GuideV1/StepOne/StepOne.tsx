import styles from './StepOne.module.scss'

import Lottie from 'react-lottie';
import animationData1 from './pumpon_wave_00.json'

const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: animationData1,
};

export const StepOne = ({ onClick }) => {
    return <div className={styles.wrapper}>
        <Lottie options={defaultOptions1}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
        />

        <h1 className={styles.h1}>Welcome to Pumpon</h1>
        <p className={styles.p}>Time to create<br />your first meme token on TON</p>
        <button onClick={onClick} className='btn btn-purple'>Next!</button>
    </div>
}