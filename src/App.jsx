import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AllProducts from './components/AllProducts/AllProducts';
function App() {


  return (
    <div className="app-container">
      <Header></Header>
      <Hero></Hero>
      <AllProducts/>
    </div>
  )
}

export default App
