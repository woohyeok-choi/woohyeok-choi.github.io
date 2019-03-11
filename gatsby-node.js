'use strict'

require('source-map-support').install()
require('ts-node').register({files: true})

const { formatPostPath, formatBlogTagPath, formatBlogCategoryPath } = require('./src/utils')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const { frontmatter } = node
    const { title, date, category, tags } = frontmatter


    createNodeField({
      node,
      name: 'slug',
      value: formatPostPath(date, title, 'category', category),
    })

    createNodeField({
      node,
      name: 'category',
      value: {
        name: category,
        slug: formatBlogCategoryPath(category)
      }
    })

    if (tags) {
      createNodeField({
        node,
        name: 'tags',
        value: tags.map(tag => ({
          name: tag,
          slug: formatBlogTagPath(tag)
        }))
      })
    }
  }
}


const { createPages } = require('./gatsby-node-patch')
exports.createPages = createPages

