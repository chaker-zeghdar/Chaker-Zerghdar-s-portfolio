import NavBar from "./components/NavBar"
import Hero from "./Sections/Hero"
import LogoShowCase from "./Sections/LogoShowCase"
import FeatureCards from './Sections/FeatureCards'
import ExperienceEvents from './Sections/ExperienceEvents'
import MyProjects from './Sections/MyProjects'
import TechStack from "./Sections/TechStack"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <LogoShowCase/>
      <FeatureCards/>
      <TechStack/>
      <ExperienceEvents/>
      <MyProjects/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
