
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kimjuhee/work/junsik/TechBlogJS/TechBlogJS/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kimjuhee/work/junsik/TechBlogJS/TechBlogJS/src/pages/404.js")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/kimjuhee/work/junsik/TechBlogJS/TechBlogJS/src/pages/index.jsx")),
  "component---src-templates-post-template-tsx": preferDefault(require("/Users/kimjuhee/work/junsik/TechBlogJS/TechBlogJS/src/templates/post_template.tsx"))
}

