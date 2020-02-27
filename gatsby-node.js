const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const template = path.resolve('src/components/markdown.js')

    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}
    })
  })
}