import { Header } from "./components/common/Header";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import { Shoplist } from "./pages/Shoplist";
import { Carts } from "./components/carts/Carts";
import LoginAndRegister from './pages/LoginAndRegister';
import { SingleClothes } from "./pages/SingleClothes";
import { Checkout } from "./pages/Checkout";
import { DoneCheckout } from "./pages/DoneCheckout";
import { UserProfile } from "./pages/UserProfile";
import { SecondHand } from "./pages/SecondHand";
import { SecondhandCheckout } from "./pages/SecondhandCheckout";
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
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/donepay/:type" element={<DoneCheckout/>}/>
          <Route path="/user" element={<UserProfile/>}/>
          <Route path="/secondhand" element={<SecondHand/>}/>
          <Route path="/secondhand-checkout" element={<SecondhandCheckout/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
