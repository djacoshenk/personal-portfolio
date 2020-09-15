import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import BlogCard from './BlogCard';

export default function Blog() {
  return (
    <article className='blog-container' id='blog'>
      <StaticQuery
        query={blogCardQuery}
        render={(data) => {
          return data.allMarkdownRemark.edges.map((post) => {
            return (
              <BlogCard
                key={post.node.id}
                title={post.node.frontmatter.title}
                desc={post.node.frontmatter.desc}
                path={post.node.frontmatter.path}
              />
            );
          });
        }}
      />
    </article>
  );
}

const blogCardQuery = graphql`
  query BlogCardQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            desc
          }
          html
        }
      }
    }
  }
`;
