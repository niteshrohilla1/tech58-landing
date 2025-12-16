import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/pages/Home'
import Policy from './components/pages/Policy'

function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/tech58-landing/" element={<Home />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
    </div>
  )
}

export default App
