'use strict'

require('source-map-support').install()
require('ts-node').register({files: true})


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: {
        origin: `/blog/posts/${node.frontmatter.date}-${node.frontmatter.title}`,
        alias: `/blog/categories/${node.frontmatter.category}/posts/${node.frontmatter.date}-${node.frontmatter.title}`
      }
    })
    createNodeField({
      node,
      name: 'category',
      value: {
        name: node.frontmatter.category,
        slug: `/blog/categories/${node.frontmatter.category}`
      }
    })
    createNodeField({
      node,
      name: 'tags',
      value: node.frontmatter.tags.map(tag => ({
        name: tag,
        slug: `/blog/tags/${tag}`
      }))
    })
  }
}

const { createPages } = require('./patch/apis')

exports.createPages = createPages
