import { LandingContainer, SectionTitle } from '../components/StyledComponents'
import Header from '../layout/Header'

const HowItWorks = () => {
  return (
    <div className='how_it_works'>
      <section className='step'>
        <h3>Pick a car</h3>
        <p>
          You can either use the form or go onto the rental page and pick the
          car of your choice
        </p>
      </section>
      <section className='step'>
        <h3>Select time duration</h3>
        <p>
          Next you select how long you need the car for and the bill will be
          calculated for you
        </p>
      </section>
      <section className='step'>
        <h3>Get car from lot</h3>
        <p>
          Upon completing your payment, you can get to our designated car lot
          and pickup the vehicle
        </p>
      </section>
    </div>
  )
}

const CarsCarousel = () => {
  return <div className='car_slider'></div>
}

const PopularCars = () => {
  return (
    <div className='popular_cars'>
      <div className='title'>
        <SectionTitle>Most Popular Cars</SectionTitle>
      </div>
      <CarsCarousel />
    </div>
  )
}

const LandingContent = () => {
  return (
    <main>
      <HowItWorks />
      <PopularCars />
    </main>
  )
}

const Landing = () => {
  return (
    <LandingContainer>
      <Header />
      <LandingContent />
    </LandingContainer>
  )
}

export default Landing
