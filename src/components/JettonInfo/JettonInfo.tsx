import styles from './JettonInfo.module.scss'

export const JettonInfo = ({ jetton }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info_wrapper}>
                <div className={styles.info_block}>
                    <div className={styles.info_block__label}>Цена</div>
                    <div className={styles.info_block__value}>{jetton?.price} TON</div>
                </div>
                <div className={styles.info_block}>
                    <div className={styles.info_block__label}>Dev</div>
                    <div className={styles.info_block__value}>{jetton?.author?.name}</div>
                </div>
            </div>

            <div className={styles.description}>{jetton?.description}</div>

            <div className={styles.card}>
                <div className={styles.market_wrapper}>
                    <div className={styles.marker_block}>
                        <div className={styles.info_block__label}>MarketCap</div>
                        <div className={styles.market_block__value}>{jetton?.marketCap}</div>
                    </div>
                    <div className={styles.marker_block}>
                        <div className={styles.info_block__label}>Liquidity</div>
                        <div className={styles.market_block__value}>{jetton?.liquidity}</div>
                    </div>
                </div>
                <div className={styles.market_wrapper}>
                    <div className={styles.marker_block}>
                        <div className={styles.info_block__label}>Supply</div>
                        <div className={styles.market_block__value}>{jetton?.supply}/{jetton?.totalSupply}</div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.info_block__label}>Contract</div>
                <a href={`https://google.com?hash=${jetton?.contract}`} target="_blank" className={styles.info_block__link}>{jetton?.contract}</a>
            </div>
            <div className={styles.card}>
                <div className={styles.info_block__label}>Ссылки</div>
                <div className={styles.links}>
                    {jetton?.links?.items?.map(item => <a key={item.title} href={item.link} target="_blank" className={styles.info_block__link}>{item.title}</a>)}
                </div>
            </div>
        </div>
    )
}