import "../../assets/styles/Index.css"
import NavBar from "../../components/NavBar/NavBar"
import Hero from "./Hero/Hero"
import About from './About/About'

const Home = () => {

    return (
      < >
      <div className="home">
      <NavBar/>    
        <Hero/>
        <About/>
      </div>
  
      </>
    )
  }
  
  export default Home
  