import './App.css'
import AboutSection from './components/About'
import Hero from './components/Hero'
import MenuPage from './components/MenuPage'
import ServicesSection from './components/Servicess'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CustomerReviews from './components/ReviewSection'

function App() {

  return (
    // add root-level clip to prevent horizontal overflow
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <MenuPage />
      <ServicesSection />
      <AboutSection />
      <CustomerReviews />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
