import { Header } from "./components/common/Header";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import { Shoplist } from "./pages/Shoplist";
import { Carts } from "./components/carts/Carts";
import LoginAndRegister from './pages/LoginAndRegister';
import { SingleClothes } from "./pages/SingleClothes";

function App() {
  return (
    <>
      <div className="App">
      <div className="page-wrapper">
        <Header/>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/shoplist" element={<Shoplist />} />
          <Route path="/login" element={<LoginAndRegister />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/single-product/:clothesId" element={<SingleClothes/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
