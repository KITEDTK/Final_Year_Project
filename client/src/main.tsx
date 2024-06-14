import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from './store/store.ts';
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import { persistStore } from 'redux-persist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistStore(store)}>
          <AuthProvider
            store={createStore({
              authName: "_auth",
              authType: "cookie",
              cookieDomain: window.location.hostname,
              cookieSecure: false,
            })}
          >
            <App />
            <ToastContainer />
          </AuthProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
)
