import { useState, useEffect } from "react";
import { colors, icons } from "./constants";
import { Button, InputStyle, Row, SFilterSection } from "./StyledComponents";

const FilterSection = () => {
  const [priceFilter, setPriceFilter] = useState({ min: null, max: null });
  const [transmissionFilter, setTransmissionFilter] = useState({
    manual: false,
    automatic: false,
  });
  const [yearFilter, setYearFilter] = useState({
    min: null,
    max: null,
  });
  const [brandFilter, setBrandFilter] = useState("");

  useEffect(() => {
    logStates();
  }, [priceFilter, brandFilter, yearFilter, transmissionFilter]);

  function logStates() {
    console.log("PRICE FILTER", priceFilter);
    console.log("TRANMISSION FILTER", transmissionFilter);
    console.log("YEAR FILTER", yearFilter);
    console.log("BRAND FILTER", brandFilter);
  }

  function handleFilter({ target: { name, value } }) {
    // console.log(name);
    switch (name) {
      case "transmission":
        setTransmissionFilter({
          [value]: !transmissionFilter[value],
        });
        break;
      case "brand":
        setBrandFilter(value);
        break;
      case "minYear":
        console.log(name, value);
      // if (name === "minYear") {
      //   setYearFilter({ min: value });
      // } else if (name === "maxYear") {
      //   setYearFilter({ max: value });
      // }
      case "maxYear":
        console.log(name, value);
      default:
        return;
    }
  }

  function searchDB(filterState) {
    console.log("A search is being made");
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
            id="automatic"
            value="automatic"
            checked={transmissionFilter.manual}
            onChange={handleFilter}
          />
          <label htmlFor="automatic">Automatic</label>
        </div>
        <div className="checkGroup">
          <input
            type="checkbox"
            name="transmission"
            id="manual"
            checked={transmissionFilter.manual}
            value="manual"
            onChange={handleFilter}
          />
          <label htmlFor="manual">Manual</label>
        </div>
      </section>
      <section className="filter">
        <h4 className="filterName">Year</h4>
        <Row>
          <div className="selectGroup">
            <label htmlFor="">Min Year</label>
            <select name="minYear" onChange={handleFilter}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
          <div className="selectGroup">
            <label htmlFor="">Max Year</label>
            <select name="maxYear" onChange={handleFilter}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
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
          <InputStyle
            onChange={handleFilter}
            hoverBg={colors.orange}
            small
            type="number"
            name="minPrice"
            value={priceFilter.min}
            placeholder="min"
          />
          <InputStyle
            onChange={handleFilter}
            hoverBg={colors.orange}
            small
            type="number"
            name="maxPrice"
            value={priceFilter.max}
            placeholder="max"
          />
        </Row>
      </section>
      <div className="buttons">
        <Button onClick={searchDB}>
          <span className="text">Search</span>
          <span className="icon">{icons.search}</span>
        </Button>
      </div>
    </SFilterSection>
  );
};

export default FilterSection;
