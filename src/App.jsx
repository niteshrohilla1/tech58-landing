import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AllProducts from './components/AllProducts/AllProducts';
import About from './components/About/About';
import HR58Section from './components/HR58Section/HR58Section';
function App() {


  return (
    <div className="app-container">
      <Header></Header>
      <Hero></Hero>
      <AllProducts/>
      <About/>
      <HR58Section/>
    </div>
  )
}

export default App
