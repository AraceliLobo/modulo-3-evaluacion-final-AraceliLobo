import PropTypes from "prop-types";

const Filters = (props) => {
  const handleInputChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInputChange(inputValue);
  };
  const handleChangeLocation = (ev) => {
    const locationValue = ev.currentTarget.value;
    props.handleChangeLocation(locationValue);
  };

  return (
    <form className="search">
      <label htmlFor="search">Search a character</label>
      <input
        className="search-input"
        placeholder="Morty Smith"
        onChange={handleInputChange}
        id="search"
        name="search"
        type="text"
        value={props.searchValue}
      />
      <input
        className="location-input"
        placeholder="Earth"
        onChange={handleChangeLocation}
        id="location"
        name="location"
        type="text"
        value={props.searchLocation}
      />
    </form>
  );
};

Filters.propTypes = {
  searchValue: PropTypes.string,
  handleInputChange: PropTypes.func,
  searchLocation: PropTypes.string,
  handleChangeLocation: PropTypes.func,
};

export default Filters;
