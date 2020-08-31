import React from 'react';

function BlogPost({ title, desc }) {
  return (
    <a className='blog-post' href='#home'>
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
}

export default BlogPost;
