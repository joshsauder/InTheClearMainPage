const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const template = path.resolve('src/components/privacy.js')

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


  console.log(result)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}, // additional data can be passed via context
    })
  })
}