import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO() {
  const { site } = useStaticQuery(siteQuery);
  const {
    siteMetadata: { author, description, keywords, title, url },
  } = site;

  const seo = {
    author,
    description,
    keywords,
    title,
    url,
  };

  return (
    <Helmet title={seo.title}>
      <meta name='author' content={seo.author} />
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keywords} />
      <meta name='url' content={seo.url} />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  );
}

const siteQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        author
        description
        keywords
        title
        url
      }
    }
  }
`;
