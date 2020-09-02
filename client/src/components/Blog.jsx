import React from 'react';
import shortid from 'shortid';
import BlogCard from './BlogCard';

function Blog() {
  const blogCards = [
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
      <section className='blog-card-container'>
        {blogCards.map((card) => {
          return (
            <BlogCard
              key={shortid.generate()}
              title={card.title}
              desc={card.desc}
            />
          );
        })}
      </section>
    </article>
  );
}

export default Blog;
