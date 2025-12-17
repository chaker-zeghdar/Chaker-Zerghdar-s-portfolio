import NavBar from "./components/NavBar"
import Hero from "./Sections/Hero"
import LogoShowCase from "./Sections/LogoShowCase"
import ShowCaseSection from "./Sections/ShowCaseSection"
import FeatureCards from './Sections/FeatureCards'
import Experience from "./Sections/Experience"
import TechStack from "./Sections/TechStack"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection/>
      <LogoShowCase/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
