import { Link } from "react-router-dom"
import { SDiscover, SectionTitle, Paragraph, Button } from "../components/StyledComponents"

const Discover = () => {
  return (
    <SDiscover>
      <SectionTitle>Enjoy our unique fleet today</SectionTitle>
      <Paragraph>
        Drive confidently knowing our cars are insured and well documented
        making navigating the authrorities a breeze
      </Paragraph>
      <Link to="/rentals">
        <Button>Find A Car</Button>
      </Link>
    </SDiscover>
  )
} 

export default Discover