import { Header } from "./components/common/Header";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
import { Shoplist } from "./pages/Shoplist";
function App() {
  return (
    <>
      <div className="App">
      <div className="page-wrapper">
        <Header/>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/shoplist" element={<Shoplist />} />
        </Routes>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
