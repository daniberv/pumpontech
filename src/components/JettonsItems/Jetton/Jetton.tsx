import { useMemo } from 'react'
import styles from './Jetton.module.scss'
import { useAuth } from '@/providers/AuthProvider';
import { Default } from './Default';
import { Grid } from './Grid';

export const Jetton = ({ item, gridMode }) => {
    const { cart, favorite, toggleCart, toggleFavorite, buy } = useAuth();

    const isFavorite = useMemo(() => favorite.includes(i => i.id === item.id), [favorite]);
    const isCart = useMemo(() => cart.find(i => i.id === item.id), [cart]);

    const setFavorite = () => {
        toggleFavorite(item)
    }

    const setCart = () => {
        toggleCart(item)
    }

    switch (gridMode) {
        case 'default':
            return (
                <div className={`${styles.jetton} ${styles[gridMode]}`}>
                    <Default item={item} gridMode={gridMode} isCart={isCart} isFavorite={isFavorite} onFavorite={setFavorite} onCart={setCart}/>
                </div>
            )
        case 'grid':
            return (
                <div className={`${styles.jetton} ${styles[gridMode]}`}>
                    <Grid item={item} gridMode={gridMode} isCart={isCart} isFavorite={isFavorite} onFavorite={setFavorite} onCart={setCart} onBuy={buy} />
                </div>
            )
        default:
            return null;
    }
}