import React from 'react';

function BlogCard({ title, desc }) {
  return (
    <a className='blog-card' href='#home'>
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
}

export default BlogCard;
