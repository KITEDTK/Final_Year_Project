import { Sidebar } from "./components/commons/Sidebar";
import { Header } from "./components/commons/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import { Clothes } from "./pages/Clothes";
import { Dashboard } from "./pages/Dashboard";
import { Order } from "./pages/Order";
import { Refunds } from "./pages/Refunds";
import { useAppSelector } from "./store/hooks";
import { Login } from "./pages/Login";

function App() {
  const auth = useAppSelector((state) => state.auth.auth);

  return (
    <div className="App">
      {auth === true ? (
        <div className="wrapper">
          <Header />
          <Sidebar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/order" element={<Order />} />
              <Route path="/refunds" element={<Refunds />} />
              {/* Redirect to /login if route is not matched */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
