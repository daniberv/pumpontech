import { useEffect, useMemo, useState } from 'react'
import styles from './UserPointsRecords.module.scss'
import { PointsRecord } from './PointsRecord';

export const UserPointsRecords = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [records, setRecords] = useState([]);

    const [isFetching, setIsFetching] = useState(true);

    const recordsCut = useMemo(() => {
        if (records.length) {
            return {
                short: records.slice(0, 5),
                long: records.slice(5, records.length),
            }
        }
    }, [records]);

    const buttonLabel = useMemo(() => isExpanded ? "Скрыть" : "Раскрыть", [isExpanded])
    const toggle = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        setRecords([
            {
                id: 1,
                createdAt: '01.01.2024',
                type: 'Welcome Bonus',
                amount: '1500',
                status: 'success',
            },
            {
                id: 2,
                createdAt: '01.01.2024',
                type: 'Welcome Bonus',
                amount: '1500',
                status: 'success',
            },
            {
                id: 3,
                createdAt: '01.01.2024',
                type: 'Welcome Bonus',
                amount: '1500',
                status: 'success',
            },
            {
                id: 4,
                createdAt: '01.01.2024',
                type: 'Welcome Bonus',
                amount: '1500',
                status: 'success',
            },
            {
                id: 5,
                createdAt: '01.01.2024',
                type: 'Welcome Bonus',
                amount: '1500',
                status: 'success',
            },
            {
                id: 6,
                createdAt: '01.01.2024',
                type: 'Welcome Bonus',
                amount: '1500',
                status: 'success',
            }
        ])
        setIsFetching(false)
    }, [])

    if (isFetching) {
        return (
            <div className='loader'>Загрузка...</div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {recordsCut?.short?.map((item, index) => <PointsRecord item={item} key={index} />)}
            {!!recordsCut?.long?.length && <>
                {isExpanded && <>
                    {recordsCut?.long?.map((item, index) => <PointsRecord item={item} key={index} />)}
                </>}
            </>}
            {!!recordsCut?.long?.length && <button className={styles.expand_btn} onClick={toggle}>{buttonLabel}</button>}
        </div>
    )
}