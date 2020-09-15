import React from 'react';
import Link from 'gatsby-link';

import PropTypes from 'prop-types';

BlogCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  path: PropTypes.string,
};

export default function BlogCard({ title, desc, path }) {
  return (
    <Link to={path} className='blog-card'>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
}
