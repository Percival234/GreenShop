import PropTypes from 'prop-types';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

function FilterCritery({ title, count, id, param }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const client = useQueryClient();

  const handleCategory = (event) => {
    if (event.target.checked) {
      setSearchParams((prev) => {
        prev.set(param, [id, prev.get(param)]);
        return prev;
      });
    } else {
      searchParams.delete(param);
      setSearchParams(searchParams);
    }
    client.invalidateQueries({ queryKey: ['products'] });
  };
  return (
    <div className="filter__item">
      <input
        id={title}
        type="checkbox"
        className="filter__checkbox"
        value={title}
        onChange={handleCategory}
      />
      <label htmlFor={title} className="filter__label">
        <div>{title}</div>
        <div>({count})</div>
      </label>
    </div>
  );
}

FilterCritery.propTypes = {
  title: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default FilterCritery;
