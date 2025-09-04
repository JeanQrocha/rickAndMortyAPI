import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home';
import About from './pages/about';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <main>
        {/*filtros */}
       
      </main>
      <Footer />
    </>
  )
}


export default App
