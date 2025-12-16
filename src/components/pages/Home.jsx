import Hero from "../Hero/Hero";
import AllProducts from "../AllProducts/AllProducts";
import About from "../About/About";
import AllProducts58Section from "../Product58/AllProducts58Section";
import Footer58 from "../Footer/Footer58";
export default function Home() {
    return (
        <>
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
        </>
    )
}