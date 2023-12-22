import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import './BlogCard.scss';

export default function BlogCard({ imgSrc, date, id, title, shortDescription }) {
  return (
    <div className="blog-card">
      <img src={imgSrc} alt="plant" />
      <div className="blog-card__content">
        <div className="blog-card__date">{date}</div>
        <Link to={`/blog/${id}`} className="text-truncated blog-card__title item-title">
          {title}
        </Link>
        <p className="text-truncated">{shortDescription}</p>
        <Link className="blog-card__link" to={`/blog/${id}`}>
          Read More <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}
