module.exports = {
  siteMetadata: {
    title: 'Danny Jacoshenk | Frontend Developer',
    description: 'Read my blog, view my work, and contact me',
    keywords: 'blog, frontend developer, javascript, react, gatsby, jamstack',
    url: 'https://dannyjaco.me',
    author: 'Danny Jacoshenk',
    image: 'code.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/styles'],
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
