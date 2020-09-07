// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-blog-js": () => import("./../../../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-success-js": () => import("./../../../src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */),
  "component---src-pages-work-js": () => import("./../../../src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

