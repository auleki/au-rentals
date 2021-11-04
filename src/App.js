import { useContext } from "react";
import AuthModal from "./components/AuthModal";
import PageRoutes from "./components/PageRoutes";
import { PageContainer } from "./components/StyledComponents";
import { AuthModalContext } from "./context/AuthModalContext";
import Navbar from "./layout/Navbar";

const App = () => {
  const { isModalOpen } = useContext(AuthModalContext);
  return (
    <PageContainer>
      <Navbar />
      {isModalOpen && <AuthModal />}
      <PageRoutes />
    </PageContainer>
  );
};

export default App;
