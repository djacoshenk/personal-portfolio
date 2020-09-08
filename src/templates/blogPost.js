import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';

export default function blogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Fragment>
      <Header />
      <div className='blog-post-container'>
        <h1>{frontmatter.title}</h1>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Fragment>
  );
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        desc
      }
      html
      id
    }
  }
`;
