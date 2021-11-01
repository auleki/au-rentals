import { SectionTitle } from './StyledComponents'
import CarsCarousel from './CarsCarousel'

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

export default PopularCars