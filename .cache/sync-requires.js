const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/djacoshenk/Desktop/Projects/personal-portfolio/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/djacoshenk/Desktop/Projects/personal-portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/djacoshenk/Desktop/Projects/personal-portfolio/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/djacoshenk/Desktop/Projects/personal-portfolio/src/pages/success.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/djacoshenk/Desktop/Projects/personal-portfolio/src/pages/work.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/djacoshenk/Desktop/Projects/personal-portfolio/src/templates/blogPost.js")))
}

