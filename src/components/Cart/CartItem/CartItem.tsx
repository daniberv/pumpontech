import styles from './CartItem.module.scss'

export const CartItem = ({ item, onDelete }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.jetton_info}>
                <div className={styles.image}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.name}>
                    <div>{item.title}</div>
                    <div className={styles.symbol}>{item.symbol}</div>
                    <div className={styles.price}>{item.price}</div>
                </div>
            </div>
            <div className="actions">
                <button className={styles.delete} onClick={() => onDelete(item)}>x</button>
            </div>
        </div>
    )
}