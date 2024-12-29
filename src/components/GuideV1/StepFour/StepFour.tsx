import styles from './StepFour.module.scss'

import Lottie from 'react-lottie';
import animationData1 from './pumpon_igle_00.json'

const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: animationData1,
};

export const StepFour = ({ onClick }) => {
    return <div className={styles.wrapper}>
        <Lottie options={defaultOptions1}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
        />

        <p className={styles.p}>Pumpon is a mempad superapp<br />launch & trade tokens, host airdrops and use pumpon wallets<br />while earning rewards!</p>
        <button onClick={onClick} className='btn btn-purple'>Start it up!</button>
    </div>
}