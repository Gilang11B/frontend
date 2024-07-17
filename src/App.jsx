
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Tranding from "./components/Tranding"
import Superhero from "./components/Superhero"
import Footer from "./components/Footer"



function App() {

  return (
    <>
      <div className="intro" id="top">
        <Navbar/>
        <Intro />      
      </div>  

      <div >
        <Tranding />
      </div>

      <div>
        <Superhero />
      </div>
      
      <div className="container-fluid bg-secondary">
        <Footer/>
      <a href="#top" className="btn btn-warning p-2 tombol">Go to top</a>
      </div>
      </>
        
  )
}

export default App
