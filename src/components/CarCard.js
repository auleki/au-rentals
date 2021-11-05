import { icons } from "./constants";
import { SCarCard } from "./StyledComponents";

const CarCard = () => {
  return (
    <SCarCard>
      <section className="title">
        <h4 className="carTitle">FORD EXPLORER 2018</h4>
        <button className="icon">{icons.unFavorited}</button>
      </section>
    </SCarCard>
  );
};

export default CarCard;
