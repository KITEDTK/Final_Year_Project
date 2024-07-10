import { Sidebar } from "./components/commons/Sidebar";
import { Header } from "./components/commons/Header";
import { Route, Routes } from "react-router-dom";
import { Clothes } from "./pages/Clothes";
import { Dashboard } from "./pages/Dashboard";
import { Order } from "./pages/Order";
import { Refunds } from "./pages/Refunds";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/order" element={<Order />} />
            <Route path="/refunds" element={<Refunds />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
