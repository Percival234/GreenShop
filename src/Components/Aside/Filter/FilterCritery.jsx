import PropTypes from 'prop-types';

function FilterCritery({ title, count }) {
  return (
    <div className="filter__item">
      <input id={title} type="checkbox" className="filter__checkbox" value={title} />
      <label htmlFor={title} className="filter__label">
        <div>{title}</div>
        <div>({count})</div>
      </label>
    </div>
  );
}

FilterCritery.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default FilterCritery;
