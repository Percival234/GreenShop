import PropTypes from 'prop-types';

import './Pagination.scss';

function Pagination({ pagesCount }) {
  return (
    <div className="pagination">
      {Array.from({ length: pagesCount }, (_, index) => index + 1).map((page) => (
        <button key={page} className={`pagination__point ${page == 1 ? 'active' : ''}`}>
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
