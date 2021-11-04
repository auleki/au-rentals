import { useContext } from "react/cjs/react.development";
import { AuthModalContext } from "../context/AuthModalContext";
import {
  InputStyle,
  SAuthForm,
  Button,
  SectionTitle,
  Row,
  TextButton,
} from "./StyledComponents";

const RegisterForm = () => {
  const { setAuthContext } = useContext(AuthModalContext);
  return (
    <SAuthForm>
      <SectionTitle size="2rem">Register With Us</SectionTitle>
      <Row justify="space-between">
        <div className="inputGroup">
          <label htmlFor="firstName">First Name</label>
          <InputStyle placeholder="John" type="text" />
        </div>
        <div className="inputGroup">
          <label htmlFor="lastName">Last Name</label>
          <InputStyle placeholder="Doe" type="text" />
        </div>
      </Row>
      <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <InputStyle
          placeholder="john@124.com"
          type="email"
          autoComplete="false"
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <InputStyle className="password" placeholder="******" type="password" />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Confirm Password</label>
        <InputStyle className="password" placeholder="******" type="password" />
      </div>
      <Row justify="space-between">
        <TextButton onClick={() => setAuthContext("login")}>
          Have an account? Login
        </TextButton>
        <TextButton onClick={() => setAuthContext("reset")}>
          Reset Password
        </TextButton>
      </Row>
      <Button>Create account</Button>
    </SAuthForm>
  );
};

export default RegisterForm;
