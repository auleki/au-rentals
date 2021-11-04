import { useContext } from "react";
import { AuthModalContext } from "../context/AuthModalContext";
import {
  InputStyle,
  SAuthForm,
  Button,
  SectionTitle,
  Row,
  TextButton,
} from "./StyledComponents";

const LoginForm = () => {
  const { setAuthContext } = useContext(AuthModalContext);

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("user logging in...");
  };

  return (
    <SAuthForm onSubmit={loginUser}>
      <SectionTitle size="2rem">Get back into your account</SectionTitle>
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
      <Row justify="space-between">
        <TextButton onClick={() => setAuthContext("register")}>
          No account? Register
        </TextButton>
        <TextButton onClick={() => setAuthContext("reset")}>
          Reset Password
        </TextButton>
      </Row>
      <Button>Sign In</Button>
    </SAuthForm>
  );
};

export default LoginForm;
