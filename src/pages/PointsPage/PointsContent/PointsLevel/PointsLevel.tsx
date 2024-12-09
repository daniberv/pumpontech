import { useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite"

import styles from './PointsLevel.module.scss'
import { Level } from "./Level";

const levels = [
    { title: 'COURIUS', rate: '-', color: '#fff', status: 'none', },
    { title: 'COUPER', rate: '0.00025', color: '#B87333', status: 'couper' },
    { title: 'BRONZE', rate: '0.00050', color: '#CD7F32', status: 'bronze' },
    { title: 'SILVER', rate: '0.00050', color: '#C0C0C0', status: 'silver' },
    { title: 'GOLD', rate: '0.00050', color: '#FFD700', status: 'gold' },
    { title: 'RUBY', rate: '0.00050', color: '#E0115F', status: 'ruby' },
    { title: 'BRILLIANT', rate: '0.00050', color: '#E4F5FC', status: 'brilliant' },
    { title: 'EPIC', rate: '1000.00000', color: '#9B30FF', status: 'epic' },
];

export const PointsLevel = observer(() => {
    const { user } = useStore();

    return (
        <div className={styles.wrapper}>
            {levels.map(item => 
                <Level item={item} key={item.title} color={item.color} />
            )}
        </div>
    )
});