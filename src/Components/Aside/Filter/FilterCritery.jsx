import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

function FilterCritery({ title, count, id, param }) {
  const client = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (event) => {
    setSearchParams((prev) => {
      let criteriesArray = [];
      const isChecked = event.target.checked;
      const currentCriteries = prev.get(param);

      if (currentCriteries) criteriesArray = currentCriteries.split(',');

      if (isChecked && !criteriesArray.includes(id)) {
        criteriesArray.push(id);
      } else if (!isChecked) {
        criteriesArray = criteriesArray.filter((categoryId) => categoryId !== id);
      }

      if (criteriesArray.length) {
        prev.set(param, criteriesArray.join(','));
      } else {
        prev.delete(param);
      }

      prev.delete('page');
      return prev;
    });
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
        checked={!!searchParams.get(param)?.split(',')?.includes(id)}
      />
      <label htmlFor={title} className="filter__label">
        <div>{title}</div>
        <div>({count})</div>
      </label>
    </div>
  );
}

FilterCritery.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default FilterCritery;
