import { useContext } from "react";
import { AuthModalContext } from "../context/AuthModalContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ResetForm from "./ResetForm";
import { SAuthModal, IconButton } from "./StyledComponents";

const AuthModal = () => {
  const { authContext, setIsModalOpen } = useContext(AuthModalContext);
  return (
    <SAuthModal>
      <IconButton
        onClick={() => setIsModalOpen(false)}
        round
        className="closeModal"
      >
        X
      </IconButton>
      {authContext === "login" ? (
        <LoginForm />
      ) : authContext === "reset" ? (
        <ResetForm />
      ) : (
        <RegisterForm />
      )}
    </SAuthModal>
  );
};
export default AuthModal;
