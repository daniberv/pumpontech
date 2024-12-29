import styles from './TapGame.module.scss'

import Lottie from 'react-lottie-player';
import animationData1 from './pumpon_walker_03.json'
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ConfettiExplosion, { ConfettiProps } from 'react-confetti-explosion';

const largeProps: ConfettiProps = {
    force: 0.8,
    duration: 2000,
    particleCount: 100,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
};

export const TapGame = () => {
    const animationRef = useRef();
    const [play, setPlay] = useState(false);
    const [goTo, setGoTo] = useState(0);
    const [segments, setSegments] = useState(null);
    const [isLargeExploding, setIsLargeExploding] = useState(false);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress >= 25) {
            setProgress(0);
            toast.success("Loot 100 $PP!");
            setIsLargeExploding(true);

            // STORE THE POINTS

        }
    }, [progress])

    const tap = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPlay(true);
        setSegments([[200, 250], [10, 0]]);
        setProgress(prev => prev + 1);
    }

    const reset = () => {
        setPlay(false)
    }

    return <div className={styles.wrapper}>
        <div>
            <Lottie
                onClick={tap}
                ref={animationRef}
                animationData={animationData1}
                play={play}
                speed={6}
                goTo={goTo}
                segments={segments}
                useSubframes={true}
                onLoopComplete={reset}
            />

            <div className={styles.progress} style={{ width: `${progress * 4}%`, height: `${progress * 4}%` }}></div>
            {isLargeExploding && <div style={{ position: 'absolute', top: '50%', left: '50%' }}><ConfettiExplosion {...largeProps} onComplete={() => setIsLargeExploding(false)} /></div>}
        </div>
    </div>
}