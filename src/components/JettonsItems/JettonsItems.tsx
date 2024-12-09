import { useAuth } from "@/providers/AuthProvider";
import { Jetton } from "./Jetton";

import styles from './JettonsItems.module.scss'
import { Cart } from "@/components/Cart";
import { useStore } from "@/providers/StoreProvider";

export const JettonsItems = ({ ids, isLoading, cardable }) => {
    const { gridMode } = useAuth();
    const { jettons } = useStore();

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={styles[gridMode]}>
            {ids?.map(id => <Jetton item={jettons?.items?.get(id)} key={id} gridMode={gridMode} />)}

            {cardable && <Cart />}
        </div>
    )
}