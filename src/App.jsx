import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services.jsx'
import FeaturedHighlights from './Components/FeaturedHighlights.jsx'
import PortfolioPage from './Components/PortfolioPage.jsx'
import EstimatorPage from './Components/Estimator/EstimatorPage.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import StoryPopup from './Components/StoryPopup.jsx'
import './App.css'

// Client-side route changes don't auto-scroll like a full page load does —
// this scrolls to the URL's hash target (e.g. Navbar links to "/#services")
// or back to the top when navigating to a page with no hash.
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

function HomePage() {
  return (
    <>
      <Hero/>
      <Services/>
      <FeaturedHighlights/>
      <Contact/>
    </>
  )
}

function App() {
  return(
    <div>
      <ScrollToHash/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/estimator" element={<EstimatorPage/>} />
        <Route path="/contact" element={<Contact standalone/>} />
      </Routes>
      <Footer/>
      <StoryPopup/>
    </div>
  )
}

export default App
