import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AllProducts from './components/AllProducts/AllProducts';
import About from './components/About/About';
import AllProducts58Section from './components/Product58/AllProducts58Section';
import Footer58 from './components/Footer/Footer58';
function App() {


  return (
    <div className="app-container">
      <Header></Header>
      <div id="home" className="section section-home">
        <Hero ></Hero>
        <AllProducts />
      </div>

      <div id="about" className="section" >
        <About />
      </div>
      <div id="products" className="section">
        <AllProducts58Section />
        <Footer58 />
      </div>
    </div>
  )
}

export default App
