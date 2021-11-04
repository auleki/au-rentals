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

const ResetForm = () => {
  const { setAuthContext } = useContext(AuthModalContext);

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("user logging in...");
  };

  return (
    <SAuthForm onSubmit={loginUser}>
      <SectionTitle size="2rem">Reset your account password</SectionTitle>
      <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <InputStyle
          placeholder="john@124.com"
          type="email"
          autoComplete="false"
        />
      </div>
      <Row justify="space-between">
        <TextButton onClick={() => setAuthContext("register")}>
          No account? Register
        </TextButton>
        <TextButton onClick={() => setAuthContext("login")}>Login</TextButton>
      </Row>
      <Button>Reset Password</Button>
    </SAuthForm>
  );
};

export default ResetForm;
