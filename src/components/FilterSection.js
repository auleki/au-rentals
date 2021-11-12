import { colors } from "./constants";
import { InputStyle, Row, SFilterSection } from "./StyledComponents";

const FilterSection = () => {
  return (
    <SFilterSection>
      <h2>Filter by</h2>
      <section className="filter">
        <h4 className="filterName">Transmission</h4>
        <div className="inputGroup">
          <label htmlFor="automatic">Automatic</label>
          <input
            type="checkbox"
            name="transmission"
            id="transmission"
            value="automatic"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="manual">Manual</label>
          <input
            type="checkbox"
            name="transmission"
            id="transmission"
            value="manual"
          />
        </div>
      </section>
      <section className="filter">
        <h4 className="filterName">Year</h4>
        <Row>
          <InputStyle small hoverBg={colors.orange} placeholder="min" />
          <InputStyle small hoverBg={colors.orange} placeholder="max" />
        </Row>
      </section>
      <section className="filter">
        <h4 className="filterName">Brand</h4>
        <div className="dropdownGroup">
          <select name="brand">
            <option value="" selected>
              Pick a brand
            </option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Mistibuishi">Mistibuishi</option>
            <option value="Mazda">Mazda</option>
            <option value="Benz">Benz</option>
          </select>
        </div>
      </section>
      <section className="filter">
        <h4 className="filterName">Price/day</h4>
        <Row>
          <InputStyle hoverBg={colors.orange} small placeholder="min" />
          <InputStyle hoverBg={colors.orange} small placeholder="max" />
        </Row>
      </section>
    </SFilterSection>
  );
};

export default FilterSection;
