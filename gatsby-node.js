exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve('./src/templates/blogPost.js');

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: id }) {
        edges {
          node {
            frontmatter {
              path
              title
              desc
            }
            html
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    });
  });
};
