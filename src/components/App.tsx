import { useLaunchParams } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { routes } from '@/navigation/routes';

import '@telegram-apps/telegram-ui/dist/styles.css';
import { AuthProvider } from "@/providers/AuthProvider";
import { createStore, StoreProvider } from "@/providers/StoreProvider";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "@/providers/SocketProvider";

const store = createStore()

function App() {
  const lp = useLaunchParams();

  return (
    <AppRoot
      appearance={'dark'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <StoreProvider store={store}>
        <SocketProvider>
          <AuthProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                {routes.map((route) => <Route key={route.path} {...route} />)}
                <Route path="*" element={<Navigate to="/"/>}/>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </SocketProvider>
      </StoreProvider>
    </AppRoot>
  )
}

export { App }
