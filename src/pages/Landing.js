import { LandingContainer } from '../components/StyledComponents'
import Header from '../layout/Header'

const LandingContent = () => {
  return (
    <main>
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
          <h3>Go pickup your car</h3>
          <p>
            Upon completing your payment, you can get to our designated car lot
            and pickup the vehicle
          </p>
        </section>
      </div>
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
