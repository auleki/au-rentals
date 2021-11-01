import { icons } from "../components/constants"
import { SWhyUs, Paragraph, SectionTitle, TitleContainer } from "../components/StyledComponents"

const WhyUs = () => {
  return (
    <SWhyUs>
      <TitleContainer>
        <SectionTitle>Why Us</SectionTitle>
        <Paragraph>
          We offer a lot of comfort and flexibility and comfort with our
          wide range of cars
        </Paragraph>
      </TitleContainer>
      <section className="reasons">
        <div className="reason">
          <div className="icon">{icons.customerCare}</div>
          <p>24/7 Technical Support</p>
        </div>
        <div className="reason">
          <div className="icon">{icons.customerCare}</div>
          <p>24/7 Technical Support</p>
        </div>
        <div className="reason">
          <div className="icon">{icons.customerCare}</div>
          <p>24/7 Technical Support</p>
        </div>
      </section>
    </SWhyUs>
  )
} 

export default WhyUs