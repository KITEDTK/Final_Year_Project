import { Header } from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";
import Dashboard from "./pages/Dashboard/index";
import Shoplist from "./pages/Shoplist/index";
import LoginAndRegister from "./pages/LoginAndRegister/index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/login" element={<LoginAndRegister />} exact />
          <Route path="/shoplist/:categoryId" element={<Shoplist />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
