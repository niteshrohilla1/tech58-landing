import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/pages/Home'
import Faq from './components/pages/Faq/Faq'
import DashBoard from './components/pages/DashBoard/DashBoard'

function App() {
  return (
    <div className="app-container">


      <Routes>
        <Route path="/tech58-landing/" element={<>
          <Header />
          <Home />
        </>} />
        <Route path="/tech58-landing/faq" element={<Faq />} />
        <Route path='/tech58-landing/dashboard' element={<DashBoard />}></Route>
      </Routes>
    </div>
  )
}

export default App
