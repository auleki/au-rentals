import { Button, SSubscribeForm, SubscribeInput } from "./StyledComponents";

const SubscribeForm = () => {
  return (
    <SSubscribeForm>
      <h2>Subscribe Now!</h2>
      <form className="subscription_form">
        <SubscribeInput placeholder="eggo@gmail.com" />
        <Button noRadius>GO</Button>
      </form>
    </SSubscribeForm>
  );
};

export default SubscribeForm;
