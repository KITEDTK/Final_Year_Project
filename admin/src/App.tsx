import { Sidebar } from "./components/commons/Sidebar";
import { Header } from "./components/commons/Header";
import { Route, Routes } from "react-router-dom";
import { Clothes } from "./pages/Clothes";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/clothes" element={<Clothes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;