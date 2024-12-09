import { Parser } from "react-tiny-bbcode";
import styles from './JettonLegend.module.scss';

export const JettonLegend = ({ jetton }) => {
    return (
        <div className={styles.wrapper}>
            <Parser bbcode={jetton?.legend} />
        </div>
    )
}