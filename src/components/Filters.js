import PropTypes from "prop-types";

const Filters = (props) => {
  const handleInputChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInputChange(inputValue);
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
    </form>
  );
};

Filters.propTypes = {
  searchValue: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Filters;
