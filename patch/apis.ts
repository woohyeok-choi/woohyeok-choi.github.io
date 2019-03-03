import { resolve } from 'path'
import { GatsbyCreatePages } from './types'


interface QueryNodeResult {
  node: {
    id: string
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
      category?: {
        name: string
        slug?: string
      }
      tags?: Array<{
        name: string
        slug?: string
      }>
    }
  }
}

interface QueryResult {
  data: {
    posts: {
      group: Array<{
        fieldValue: string
        totalCount: number
        edges: Array<QueryNodeResult>
      }>
      totalCount
      edges: Array<QueryNodeResult>
    }
  }
}

export const createPages: GatsbyCreatePages = async ({graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators
  const result: QueryResult = await graphql(`
    {
      posts: allMarkdownRemark(
        sort: {
          fields: frontmatter___datetime
          order: DESC
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
                categorySlug {
                  name
                  slug
                }
                tagsSlug {
                  name
                  slug
                }
              }
            }
          }
        }
        edges {
          totalCount
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
              categorySlug {
                name
                slug
              }
              tagsSlug {
                name
                slug
              }
            }
          }
        }
      }
    }`
  )
  /**
   * Create pages for each blog posts
   */
  result.data.posts.edges.forEach((edge, index, arr) => {
    const nPosts = result.data.posts.totalCount
    const prevIndex = Math.max(index - 1, 0)
    const nextIndex = Math.min(index + 1, nPosts - 1)
    const prevPost = prevIndex === index ? undefined : {
      title: arr[prevIndex].node.frontmatter.title,
      slug: arr[prevIndex].node.fields.slug
    }
    const nextPost = nextIndex === index ? undefined : {
      title: arr[nextIndex].node.frontmatter.title,
      slug: arr[nextIndex].node.fields.slug
    }
    const currentSlug = edge.node.fields.slug
    const postId = edge.node.id

    createPage({
      path: currentSlug,
      component: resolve(__dirname, '../src/templates/blog-post.tsx'),
      context: {
        postId,
        prevPost,
        nextPost
      }
    })
  })

  /**
   * Create pages for each blog posts with categories
   */
  result.data.posts.group.forEach((edge, index, arr) => {

  })

  /**
   * Create each blog pages
   */
  edges.forEach(edge => {
    const { node } = edge
    const { slug } = node.fields
    if (!slug) return

    createPage({
      path: slug,
      component: resolve(__dirname, '../src/templates/blog-post.tsx'),
      context: {
        slug
      }
    })
  })

  /**
   * Create pagination
   */
  const postsPerPage = 3
  const nPosts = edges.length
  const nPages = Math.ceil(nPosts / postsPerPage)

  Array.from({
    length: nPages
  }).forEach((_, pageNum) => {
    createPage({
      path: pageNum === 0 ? '/blog' : `/blog/pages/${pageNum + 1}`,
      component: resolve(__dirname, '../src/templates/blog-list.tsx'),
      context: {
        limit: postsPerPage,
        skip: pageNum * postsPerPage,
        currentPage: pageNum + 1,
        postsPerPage
      }
    })
  })
}