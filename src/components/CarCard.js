import { useState } from "react";
import { icons } from "./constants";
import { SCarCard, Row, Button, IconButton } from "./StyledComponents";
import FordImg from "../assets/ford.jpg";

const CarCard = () => {
  const [favorited, setFavorited] = useState(true);

  function toggleFavorited() {
    setFavorited(!favorited);
  }

  return (
    <SCarCard>
      <Row justify="space-between" alignment="center">
        <h4 className="carTitle">FORD EXPLORER 2018</h4>
        <button className="icon" onClick={toggleFavorited}>
          {favorited ? icons.favorited : icons.unFavorited}
        </button>
      </Row>
      <img src={FordImg} alt="car" className="carImage" />
      <div className="info">
        <Row justify="space-between">
          <span className="describer">
            Brand: <span className="value">Ford</span>
          </span>
          <span className="describer">
            Model: <span className="value">Explorer</span>
          </span>
        </Row>
        <Row justify="space-between">
          <span className="describer">
            Year: <span className="value">2018</span>
          </span>
          <span className="describer">
            Gear: <span className="value">Automatic</span>
          </span>
        </Row>
        <Row justify="space-between" alignment="center">
          <span className="pricePerDay">
            N5,000/ <span className="text">day</span>
          </span>
          <Button>Rent Car</Button>
        </Row>
      </div>
    </SCarCard>
  );
};

export default CarCard;
