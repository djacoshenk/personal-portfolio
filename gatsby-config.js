module.exports = {
  siteMetadata: {
    title: 'Personal Portfolio',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/styles'],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`100`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    'gatsby-prismjs-dracula',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-fontawesome-css`,
  ],
};
