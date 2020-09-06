import React from 'react';
import Link from 'gatsby-link';

export default function BlogCard({ key, title, desc, path }) {
  return (
    <Link to={path} className='blog-card' key={key}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
}
