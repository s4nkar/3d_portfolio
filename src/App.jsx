import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          {/* <Feedbacks/> */}
          {/* Feedbacks are currently disabled */}
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
