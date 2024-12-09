import { useMemo } from 'react';
import styles from './Default.module.scss'
import { Link } from 'react-router-dom';

export const Default = ({ item, gridMode, isFavorite, isCart, onCart, onFavorite }) => {
    const favoriteLabel = useMemo(() => isFavorite ? "В избранном" : "В избранное", [isFavorite]);
    const cartLabel = useMemo(() => isCart ? "В корзине" : "В корзину", [isCart]);

    return (
        <div className={`${styles.jetton} ${styles[gridMode]}`}>
            <Link to={`/jettons/:jettonId?jettonId=${item.contract}`}>
                <img src={`/${item.image}`} className={styles.image}/>
                <div className={styles.info}>
                    <div className={styles.line}>
                        <div className={styles.name}>{item.title}</div>
                        <div className={styles.symbol}>{item.symbol}</div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.label}>Price</div>
                        <div className={styles.value}>{item.price}</div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.label}>Dev</div>
                        <div className={styles.value}>
                            <div className={styles.dev}>{item.author?.name}</div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.label}>Marketcap</div>
                        <div className={styles.value}>{item.marketcap}</div>
                    </div>

                    <div className={styles.description}>
                        {item.description}
                    </div>
                </div>
            </Link>

            <div className={styles.buttons}>
                <button className={`btn btn-black ${styles['btn-black']}`} onClick={onFavorite}>{favoriteLabel}</button>
                <button className={`btn btn-purple`} onClick={onCart}>{cartLabel}</button>
            </div>
        </div>
    )
}