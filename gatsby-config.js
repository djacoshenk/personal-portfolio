module.exports = {
  siteMetadata: {
    title: 'Personal Portfolio',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styles'],
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['100'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-fontawesome-css`,
  ],
};
