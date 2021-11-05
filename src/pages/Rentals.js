import CarCard from "../components/CarCard";
import { SRentals } from "../components/StyledComponents";

const Rentals = () => {
  return (
    <SRentals>
      <section className="filter">
        <h2>Filter Section</h2>
      </section>
      <section className="rentals">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </section>
    </SRentals>
  );
};

export default Rentals;
