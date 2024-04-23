import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import AuthProvider from "react-auth-kit/AuthProvider";

import createStore from "react-auth-kit/createStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
