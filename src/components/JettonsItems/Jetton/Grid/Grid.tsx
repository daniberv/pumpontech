import { useMemo } from "react";
import styles from './Grid.module.scss'
import { Link } from "react-router-dom";

export const Grid = ({ item, gridMode, isFavorite, isCart, onCart, onFavorite, onBuy }) => {
    const favoriteLabel = useMemo(() => isFavorite ? "В избранном" : "В избранное", [isFavorite]);
    const cartLabel = useMemo(() => isCart ? "В корзине" : "В корзину", [isCart]);

    const putInCart = (e) => {
        e.stopPropagation();
        onCart();
    }

    return (
        <div className={styles.wrapper}>
            <Link to={`/jettons/:jettonId?jettonId=${item.contract}`}>
                <div className={`${styles.jetton} ${styles[gridMode]}`}>
                    <img src={`/${item.image}`} className={styles.image}/>
                    <div className={styles.info}>
                        <div className={styles.line}>
                            <div className={styles.name}>{item.title}</div>
                            <div className={styles.symbol}>{item.symbol}</div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.value}>{item.price}</div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.label}>{item.marketcap}</div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.value}>
                                <div className={styles.dev}>{item.author?.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <button className={`btn btn-purple ${styles.button}`} onClick={onBuy}>$</button>
            <div className={`${styles.checkbox} ${!!isCart && styles.active}`} onClick={putInCart}></div>
        </div>
    )
}