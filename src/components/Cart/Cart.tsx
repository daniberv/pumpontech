import { useAuth } from '@/providers/AuthProvider'
import styles from './Cart.module.scss'
import { useEffect, useState } from 'react';
import { CartItem } from './CartItem';

export const Cart = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { cart, toggleCart, buy } = useAuth();

    const toggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    useEffect(() => {
        if (!cart?.length) {
            setIsCollapsed(false)
        }
    }, [cart])

    if (!cart?.length) {
        return null
    }

    return (
        <div className={`${styles.wrapper} ${!!isCollapsed && styles.expanded} `}>
            <div className={styles.cart_label}>
                В корзине: {cart?.length}
            </div>

            <div className={styles.cart_body}>
                {cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id} onDelete={toggleCart} /> )}
            </div>

            <button onClick={toggle} className={styles.toggler}>
                <img src="./assets/arrow.svg" alt="" />
            </button>

            <button className={styles.buy}>Купить</button>
        </div>
    )
}