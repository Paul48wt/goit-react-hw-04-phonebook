import PropTypes from 'prop-types';
export const Filter = ({ filter, onChange }) => {
  return (
    <label className="label">
      <span className="formTitle">Find contacts by name</span>
      <input
        className="formInput"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
