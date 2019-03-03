'use strict'

require('source-map-support').install()
require('ts-node').register({files: true})

const { createPages } = require('./patch/apis')

exports.createPages = createPages

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: `/blog/posts/${node.frontmatter.datetime}-${node.frontmatter.title}`
    })
    createNodeField({
      node,
      name: 'categorySlug',
      value: {
        name: node.frontmatter.category,
        slug: `/blog/categories/${node.frontmatter.category}`
      }
    })
    createNodeField({
      node,
      name: 'tagsSlug',
      value: node.frontmatter.tags.map(tag => ({
        name: tag,
        slug: `/blog/tags/${tag}`
      }))
    })
  }
}