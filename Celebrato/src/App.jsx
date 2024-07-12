
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import ServiceSection from './components/ServiceSection'
import Testimonials from './components/Testimonials'
import Carousel from './components/carousel'

const App = () => {
  return (
    
    <div>
        <Navbar />
        <HeroSection/>
        <Carousel/>
        <HowItWorks/>
        <WhyChooseUs/>
        <ServiceSection/>
        <Testimonials/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default App