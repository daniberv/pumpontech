import { WEBSOCKET_URL } from "@/config";
import { createContext, useEffect, useMemo, useState } from "react"
import { io } from 'socket.io-client';
import { useStore } from "../StoreProvider";
import { resolveMessage } from "./libs/resolveMessage";

export const socket = io(WEBSOCKET_URL);

const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
    const { jettons } = useStore();
    const [isConnected, setIsConnected] = useState(socket.connected);

    const handleMessage = (message) => {
        resolveMessage(message, { jettons });
    }

    const onConnect = () => {
        setIsConnected(true);
    }

    const onDisconnect = () => {
        setIsConnected(false);
    }

    useEffect(() => {
        socket.connect();
        
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('message', handleMessage);
    
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('message', handleMessage);
        };
    }, []);

    const value = useMemo(() => ({
        isConnected,
    }), [isConnected]);

    return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}

export { SocketContext, SocketProvider }