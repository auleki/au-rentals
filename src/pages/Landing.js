import {
  LandingContainer,
} from '../components/StyledComponents'
import Header from '../layout/Header'
import LandingContent from '../components/LandingContent'
import WhyUs from '../layout/WhyUs'
import Discover from '../layout/Discover'
import Footer from '../layout/Footer'


const Landing = () => {
  return (
    <LandingContainer>
      <Header />
      <LandingContent />
      <WhyUs />
      <Discover />
      <Footer />
    </LandingContainer>
  )
}

export default Landing
