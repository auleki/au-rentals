import { IconButton, SSubscribeForm, SubscribeInput } from "./StyledComponents"

const SubscribeForm = () => {
  return (
    <SSubscribeForm>
      <h2>Subscribe Now!</h2>
      <form className="subscription_form">
        <SubscribeInput placeholder="eggo@gmail.com"/>
        <IconButton>GO</IconButton>
      </form>
    </SSubscribeForm>
  )
} 

export default SubscribeForm