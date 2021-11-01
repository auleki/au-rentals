import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCube, Pagination } from 'swiper/core'
import { popularCars } from '../components/constants'
import { Button } from './StyledComponents'
// INITIALIZATIONS
SwiperCore.use([EffectCube, Pagination])


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
          <p className='model'>{car.modelName}</p>
          <img src={car.carImage} alt='car' srcset='' />
          <div className='info'>
            <p className='speed'>Max Speed: {car.maxSpeed} / km</p>
            <p className='fuel'>Fuel: {car.fuel}</p>
          </div>
          <div className='actions'>
            <section className='price_section'>
              <p className='price'>N{car.pricePerDay}</p>
              <span>per day</span>
            </section>
            <Button>Rent a car</Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarsCarousel