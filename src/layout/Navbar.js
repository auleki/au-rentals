import { Button, SNavbar } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthModalContext } from "../context/AuthModalContext";

const Navbar = () => {
  const { isModalOpen, setIsModalOpen } = useContext(AuthModalContext);
  return (
    <SNavbar>
      <div className="logo">
        <Link to="/">
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className="searchBar">
        <h3>SPACE FOR SEARCH BAR</h3>
      </div>
      <ul className="navbar">
        <li className="navlinks">
          <Link to="/rentals">Rentals</Link>
        </li>
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>LOGIN</Button>
      </ul>
    </SNavbar>
  );
};

export default Navbar;
