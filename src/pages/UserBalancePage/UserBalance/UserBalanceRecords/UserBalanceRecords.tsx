import { useEffect, useMemo, useState } from 'react'
import styles from './UserBalanceRecords.module.scss'
import { BalanceRecord } from './BalanceRecord';

export const UserBalanceRecords = () => {
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
                type: 'deposit',
                amount: '1500',
                currency: 'TON',
                status: 'success',
            },
            {
                id: 2,
                createdAt: '01.01.2024',
                type: 'deposit',
                amount: '1500',
                currency: 'TON',
                status: 'pending',
            },
            {
                id: 3,
                createdAt: '01.01.2024',
                type: 'deposit',
                amount: '1500',
                currency: 'TON',
                status: 'success',
            },
            {
                id: 4,
                createdAt: '01.01.2024',
                type: 'deposit',
                amount: '1500',
                currency: 'TON',
                status: 'success',
            },
            {
                id: 5,
                createdAt: '01.01.2024',
                type: 'deposit',
                amount: '1500',
                currency: 'TON',
                status: 'success',
            },
            {
                id: 6,
                createdAt: '01.01.2024',
                type: 'deposit',
                amount: '1500',
                currency: 'TON',
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
            {recordsCut?.short?.map((item, index) => <BalanceRecord item={item} key={index} />)}
            {!!recordsCut?.long?.length && <>
                {isExpanded && <>
                    {recordsCut?.long?.map((item, index) => <BalanceRecord item={item} key={index} />)}
                </>}
            </>}
            {!!recordsCut?.long?.length && <button className={styles.expand_btn} onClick={toggle}>{buttonLabel}</button>}
        </div>
    )
}