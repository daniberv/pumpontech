import { useAuth } from "@/providers/AuthProvider"
import { useMemo } from "react";

import styles from './GridToggler.module.scss'

export const GridToggler = () => {
    const { gridMode, toggleGridMode } = useAuth();

    const icon = useMemo(() => {
        if (gridMode === "default") {
            return "s_grid";
        } else if (gridMode === "grid") {
            return "grid";
        } else {
            return "list";
        }
    }, [gridMode])

    return (
        <button onClick={toggleGridMode} className={styles.toggler}><img src={`./assets/${icon}.png`} alt="" /></button>
    )
}