import { initData, useSignal } from "@telegram-apps/sdk-react";
import { useContext, createContext, useMemo, useState, useEffect } from "react";
const AuthContext = createContext(null);

function getUserRows(user: TUser) {
    return {
        id: user.id.toString(),
        username: user.username || 'no_name',
        photo_url: user.photoUrl || '',
    }
}

const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState("no_name");
    const [userPhoto, setUserPhoto] = useState("");
    const [userWallet, setUserWallet] = useState(null);
    const [userTonBalance, setUserTonBalance] = useState("0.00");
    const [userPointsBalance, setUserPointsBalance] = useState("0.00");
    const [isWalletGenerating, setIsWalletGenerating] = useState(false);
    const [gridMode, setGridMode] = useState("default");

    const [cart, setCart] = useState([]);
    const [favorite, setFavorite] = useState([]);

    const initDataState = useSignal(initData.state);
    
    const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
        return initDataState && initDataState.user
            ? getUserRows(initDataState.user)
            : undefined;
        }, [initDataState]);

    useEffect(() => {
        if (userRows?.username) setUserName(userRows?.username)
    }, [userRows?.username]);

    const toggleCart = (newItem) => {
        const isExist = cart.find(item => item.id === newItem.id)

        if (isExist) {
            setCart(cart.filter(item => item.id !== newItem.id))
        } else {
            setCart([...cart, newItem]);
        }
    }

    const toggleFavorite = (newItem) => {
        const isExist = favorite.find(item => item.id === newItem.id)

        if (isExist) {
            setFavorite(favorite.filter(item => item.id !== newItem.id))
        } else {
            setFavorite([...favorite, newItem]);
        }
    }
    
    const toggleGridMode = () => {
        if (gridMode === "default") {
            setGridMode("grid");
        // } else if (gridMode === "grid") {
            // setGridMode("list");
        } else {
            setGridMode("default");
        }
    }

    const buy = () => {
        console.log('BUY')
    }

    const value = useMemo(() => ({
        userName,
        userPhoto,
        userWallet,
        isWalletGenerating,
        userTonBalance,
        userPointsBalance,
        cart,
        favorite,
        toggleCart,
        toggleFavorite,
        gridMode,
        toggleGridMode,
        buy,
    }), [userName, cart, favorite, gridMode]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider }

export const useAuth = () => {
    return useContext(AuthContext);
};