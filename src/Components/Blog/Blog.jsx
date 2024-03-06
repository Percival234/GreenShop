import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TextTruncated from '@UI/Text/TextTruncated/TextTruncated';
import LinkUnderline from '@UI/Links/LinkUnderline/LinkUnderline';

import { SERVER_URL } from '@Constants/SERVER_URL';

function Blog({ blog: { _id, image, title, description, createdAt } }) {
  return (
    <div className="blog__card">
      <div className="blog__image-container">
        <img src={`${SERVER_URL}/static/blogs/${image}`} alt="blog" className="blog__image" />
      </div>
      <div className="blog__content">
        <div className="blog__date">{new Date(createdAt).toLocaleDateString('en-GB')}</div>
        <Link to={`/blog/${_id}`} className="blog__sub-title">
          {title}
        </Link>
        <TextTruncated rows={2}>{description}</TextTruncated>
        <LinkUnderline to={`/blog/${_id}`}>Details...</LinkUnderline>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;
