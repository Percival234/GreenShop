import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import './Pagination.scss';

function Pagination({ pagesCount }) {
  const client = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePage = (event) => {
    const page = event.target.textContent;
    setSearchParams((prev) => {
      if (page == 1) searchParams.delete('page');
      else prev.set('page', page);
      return prev;
    });
    client.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <div className="pag">
      {[...Array(pagesCount)]
        .map((_, i) => i + 1)
        .map((page) => (
          <button
            key={page}
            onClick={handlePage}
            className={
              searchParams.get('page') == page || (page == 1 && !searchParams.has('page'))
                ? 'pag__point active'
                : 'pag__point'
            }>
            {page}
          </button>
        ))}
    </div>
  );
}

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
};

export default Pagination;
