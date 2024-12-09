const steps = [
    { name: 'STEP 1', text: 'Pick a coin that you like' },
    { name: 'STEP 2', text: 'Buy the coin on the bonding curve' },
    { name: 'STEP 3', text: 'Sell at any time to lock in your profits or losses' },
    { name: 'STEP 4', text: 'When enough people buy on the bonding curve it reaches a market cap of $69k' },
    { name: 'STEP 5', text: '$12k of liquidity is then deposited in raydium and burned' },
]

import { UserPage } from '@/components/UserPage'
import styles from './FaqPage.module.scss'

export const FaqPage = () => {
    return (
        <UserPage back={true}>
            <h1 className={styles.h1}>FAQ</h1>

            <blockquote className={styles.blockquote}>Pump prevents rugs by making sure that all created tokens are safe. Each coin on pump is a fair-launch with no presale and no team allocation.</blockquote>

            {steps.map((step, index) => {
                return <div className={styles.row} key={index}>
                    <div className={styles.name}>{step.name}</div>
                    <div className={styles.text}>{step.text}</div>
                </div>
            })}
        </UserPage>
    )
}