import { LandingContainer, SectionTitle } from '../components/StyledComponents'
import Header from '../layout/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCube, Pagination } from 'swiper/core'
import { popularCars } from '../components/constants'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-cube/effect-cube.min.css'
import 'swiper/components/pagination/pagination.min.css'

// INITIALIZATIONS
SwiperCore.use([EffectCube, Pagination])

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

const Car = ({ car }) => {
  return (
    <SwiperSlide>
      <h2>Cars</h2>
      <h2>Cars</h2>
      <h2>Cars</h2>
      <h2>Cars</h2>
      {/* <p>{car.modelName}</p>
      <img src={car.carImage} alt='' srcset='' />
      <p>Max Speed: {car.maxSpeed}</p>
      <p>Fuel: {car.fuel}</p> */}
    </SwiperSlide>
  )
}

const CarsCarousel = () => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
        shadowOffset: 30,
        shadowScale: 0.1
      }}
      pagination={true}
      className='mySwiper'
    >
      {popularCars.map(car => (
        <SwiperSlide>
          <p>{car.modelName}</p>
          <img src={car.carImage} alt='car' srcset='' />
          <p>Max Speed: {car.maxSpeed}</p>
          <p>Fuel: {car.fuel}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
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
