import {
  HeaderStyle,
  Title,
  Paragraph,
  InputStyle,
  Button
} from '../components/StyledComponents'

const Header = () => {
  const findCar = e => {
    e.preventDefault()
    alert('We in')
  }

  return (
    <HeaderStyle>
      <div className='header_text'>
        <Title>No Easier Way To Rent A Car In Lagos</Title>
        <Paragraph>
          If you need to drive to an occasion, AuRentals has you covered
        </Paragraph>
      </div>
      <form className='header_form' onSubmit={findCar}>
        <InputStyle
          type='text'
          name='nin'
          id='nin'
          placeholder='National Identification Number'
        />
        <InputStyle
          type='text'
          name='brand'
          id='brand'
          placeholder='Toyota, Honda, Mazda'
        />
        <InputStyle
          type='text'
          name='year'
          id='year'
          placeholder='2006, 2010, 2021'
        />
        <Button type='submit'>Find a car</Button>
      </form>
    </HeaderStyle>
  )
}

export default Header
