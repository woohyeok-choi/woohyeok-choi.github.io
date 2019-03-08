import { resolve } from "path"
import { GatsbyCreatePages, MarkdownRemarkNodeType } from "./src/types"

const { formatPagePath } = require('./src/utils')

interface QueryGroupResult {
  fieldValue: string
  totalCount: number
  edges: Array<MarkdownRemarkNodeType>
}

interface QueryResult {
  data: {
    posts: {
      totalCount
      edges: Array<MarkdownRemarkNodeType>
      groupByTag: Array<QueryGroupResult>
      groupByCategory: Array<QueryGroupResult>
    }
  }
}

const generatePagesWithSiblingPages = (
  edges: Array<MarkdownRemarkNodeType>, totalCount: number, alias: boolean
) => edges.map(({ node }, index, arr) => {

  const prevIndex = Math.max(index - 1, 0)
  const nextIndex = Math.min(index + 1, totalCount - 1)

  const prevPost = prevIndex === index ? undefined : {
    title: arr[prevIndex].node.frontmatter.title,
    slug: alias ? arr[prevIndex].node.fields.slug.alias : arr[prevIndex].node.fields.slug.origin,
  }

  const nextPost = nextIndex === index ? undefined : {
    title: arr[nextIndex].node.frontmatter.title,
    slug: alias ? arr[nextIndex].node.fields.slug.alias : arr[nextIndex].node.fields.slug.origin,
  }

  const currentSlug = alias ? node.fields.slug.alias : node.fields.slug.origin
  const postId = node.id
  return (
    {
      path: currentSlug,
      component: resolve(__dirname, "./src/templates/blog-post.tsx"),
      context: {
        postId,
        alias,
        prevPost,
        nextPost,
      }
    }
  )
})

const generatePagination = (
  totalCount: number, postsPerPage: number, paramType: string, param?: string
) => {
  const nPages = Math.ceil(totalCount / postsPerPage)

  return Array.from({
    length: nPages
  }).map((_, index) => {
    const pagePath = formatPagePath(index, paramType, param)
    let component

    if (paramType === 'category') {
      component = resolve(__dirname, "./src/templates/blog-list-category.tsx")
    } else if (paramType === 'tag') {
      component = resolve(__dirname, "./src/templates/blog-list-tag.tsx")
    } else {
      component = resolve(__dirname, './src/templates/blog-list.tsx')
    }

    return {
      path: pagePath,
      component,
      context: {
        totalCount,
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        totalPage: nPages,
        param
      }
    }
  })
}

export const createPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const { data } : QueryResult = await graphql(`{
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      groupByTag: group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug {
                origin
                alias
              }
              category {
                name
                slug
              }
              tags {
                name
                slug
              }
            }
          }
        }
      }
      groupByCategory: group(field: frontmatter___category) {
        fieldValue
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug {
                origin
                alias
              }
              category {
                name
                slug
              }
              tags {
                name
                slug
              }
            }
          }
        }
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug {
              origin
              alias
            }
            category {
              name
              slug
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }`)
  
  /**
   * Create pages for each blog posts
   */
  
  const { posts } = data
  const { edges, totalCount, groupByCategory, groupByTag } = posts
  const postsPerPage = 5
  
  generatePagesWithSiblingPages(
    edges,
    totalCount,
    false
  ).forEach(value => createPage(value))

  generatePagination(totalCount, postsPerPage, 'none', undefined).forEach(value => createPage(value))

  groupByCategory.forEach(({ edges, totalCount }) => {
    generatePagesWithSiblingPages(
      edges, totalCount, true
    ).forEach(value => createPage(value))
  })

  groupByCategory.forEach(({ totalCount, fieldValue }) => {
    generatePagination(totalCount, postsPerPage, 'category', fieldValue).forEach(value => createPage(value))
  })

  groupByTag.forEach(({ totalCount, fieldValue }) => {
    generatePagination(totalCount, postsPerPage, 'tag', fieldValue).forEach(value => createPage(value))
  })
}