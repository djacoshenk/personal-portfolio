import React from 'react';
import shortid from 'shortid';
import BlogPost from './BlogPost';

function Blog() {
  const blogPosts = [
    {
      title: 'What is Hoisting?',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      distinctio delectus accusamus ea, magnam velit!`,
    },
    {
      title: 'Pass by Value vs. Reference',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      distinctio delectus accusamus ea, magnam velit!`,
    },
    {
      title: 'Iterating Over Objects',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      distinctio delectus accusamus ea, magnam velit!`,
    },
    {
      title: 'Null, Undefined, & Not Defined',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      distinctio delectus accusamus ea, magnam velit!`,
    },
    {
      title: 'What is Coercion?',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      distinctio delectus accusamus ea, magnam velit!`,
    },
    {
      title: 'Function Declarations & Expressions',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      distinctio delectus accusamus ea, magnam velit!`,
    },
  ];

  return (
    <article className='blog-container' id='blog'>
      <h2 className='blog-container-title'>Blog</h2>
      <section className='blog-post-container'>
        {blogPosts.map((post) => {
          return (
            <BlogPost
              key={shortid.generate()}
              title={post.title}
              desc={post.desc}
            />
          );
        })}
      </section>
    </article>
  );
}

export default Blog;
