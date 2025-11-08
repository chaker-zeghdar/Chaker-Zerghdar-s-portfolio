import NavBar from "./components/NavBar"
import Hero from "./Sections/Hero"
import LogoShowCase from "./Sections/LogoShowCase"
import ShowCaseSection from "./Sections/ShowCaseSection"
import FeatureCards from './Sections/FeatureCards'
import Experience from "./Sections/Experience"
import TechStack from "./Sections/TechStack"
import Testimonials from "./Sections/Testimonials"

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
      <Testimonials/>
    </>
  )
}

export default App
