import { Header } from "./components/common/Header";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/common/Footer";
function App() {
  return (
    <>
      <div className="App">
      <div className="page-wrapper">
        <Header/>
        <Dashboard/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
