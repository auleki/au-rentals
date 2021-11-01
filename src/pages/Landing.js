import {
  LandingContainer,
} from '../components/StyledComponents'
import Header from '../layout/Header'
import LandingContent from '../components/LandingContent'
import WhyUs from '../layout/WhyUs'


const Landing = () => {
  return (
    <LandingContainer>
      <Header />
      <LandingContent />
      <WhyUs />
    </LandingContainer>
  )
}

export default Landing
