import styles from './StepThree.module.scss'

import Lottie from 'react-lottie';
import animationData1 from './pumpon_coin_gaze_00.json'

const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: animationData1,
};

export const StepThree = ({ onClick }) => {
    return <div className={styles.wrapper}>
        <Lottie options={defaultOptions1}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
        />

        <p className={styles.p}>Pumpon is everything<br />perfect time to launch your meme coin<br /> and receive rewards<br />Pumpon points are now live!</p>
        <button onClick={onClick} className='btn btn-purple'>Next!</button>
    </div>
}