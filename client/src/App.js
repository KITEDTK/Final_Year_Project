import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard/index";
import Shoplist from "./pages/Shoplist/index";
import LoginAndRegister from "./pages/LoginAndRegister/index";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<LoginAndRegister />}/>
          <Route path="/shoplist" element={<Shoplist />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
