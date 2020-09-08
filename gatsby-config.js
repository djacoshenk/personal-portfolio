module.exports = {
  siteMetadata: {
    title: 'Danny Jacoshenk | Frontend Developer',
    description: 'Read my blog, view my work, and contact me',
    keywords: 'blog, frontend developer, javascript, react, gatsby, jamstack',
    url: 'https://dannyjaco.me',
    author: 'Danny Jacoshenk',
    icon: './public/static/code.png',
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
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Portfolio`,
        short_name: `Personal Portfolio`,
        description: `Read my blog, view my work, and contact me`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/code.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
