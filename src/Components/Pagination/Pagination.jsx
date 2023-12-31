import PropTypes from 'prop-types';

import './Pagination.scss';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

function Pagination({ pagesCount }) {
  // const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const client = useQueryClient();

  const handlePage = (event) => {
    const page = event.target.textContent;
    if (page == 1) {
      searchParams.delete('page');
      setSearchParams(searchParams);
    } else {
      setSearchParams((prev) => {
        prev.set('page', page);
        return prev;
      });
    }
    client.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <div className="pagination">
      {Array.from({ length: pagesCount }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={handlePage}
          className={`pagination__point ${page == searchParams.get('page') ? 'active' : ''}`}>
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
