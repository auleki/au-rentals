import CarCard from "../components/CarCard";
import { InputStyle, Row, SRentals } from "../components/StyledComponents";
import { colors } from "../components/constants";
import FilterSection from "../components/FilterSection";
import CarRentals from "../components/CarRentals";

const Rentals = () => {
  return (
    <SRentals>
      <FilterSection />
      <CarRentals />
    </SRentals>
  );
};

export default Rentals;
