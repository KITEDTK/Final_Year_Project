import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from './store/store.ts';
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import { persistStore } from 'redux-persist';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistStore(store)}>
        <React.StrictMode>
          <AuthProvider
            store={createStore({
              authName: "_auth",
              authType: "cookie",
              cookieDomain: window.location.hostname,
              cookieSecure: false,
            })}
          >
            <App />
          </AuthProvider>
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>
)
