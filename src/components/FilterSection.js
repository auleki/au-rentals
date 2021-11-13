import { useState } from "react";
import { colors, icons } from "./constants";
import { Button, InputStyle, Row, SFilterSection } from "./StyledComponents";

const FilterSection = () => {
  const [filter, setFilter] = useState({});

  function handleFilter(e) {
    console.log("ELEMENT NAME", e.target.name);
    console.log("ELEMENT VALUE", e.target.value);
  }

  return (
    <SFilterSection>
      <h2>Filter by</h2>
      <section className="filter">
        <h4 className="filterName">Transmission</h4>
        <div className="checkGroup">
          <input
            type="checkbox"
            name="transmission"
            id="transmission"
            value="automatic"
          />
          <label htmlFor="automatic">Automatic</label>
        </div>
        <div className="checkGroup">
          <input
            type="checkbox"
            name="transmission"
            id="transmission"
            value="manual"
          />
          <label htmlFor="manual">Manual</label>
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
        <div className="selectGroup">
          <select name="brand" onChange={handleFilter}>
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
      <div className="buttons">
        <Button>
          <span className="text">Search</span>
          <span className="icon">{icons.search}</span>
        </Button>
      </div>
    </SFilterSection>
  );
};

export default FilterSection;
