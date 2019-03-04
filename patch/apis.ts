import { resolve } from "path"
import { GatsbyCreatePages } from "../src/types/Api"

enum QueryType {
  TAG,
  CATEGORY,
  NONE
}

interface QueryNodeResult {
  node: {
    id: string
    frontmatter: {
      title: string
    }
    fields: {
      slug: {
        origin: string
        alias: string
      }
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

interface QueryGroupResult {
  fieldValue: string
  totalCount: number
  edges: Array<QueryNodeResult>
}

interface QueryResult {
  data: {
    posts: {
      totalCount
      edges: Array<QueryNodeResult>
      groupByTag: Array<QueryGroupResult>
      groupByCategory: Array<QueryGroupResult>
    }
  }
}

const generatePagesWithSiblingPages = (
  edges: Array<QueryNodeResult>, totalCount: number, alias: boolean
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
      component: resolve(__dirname, "../src/templates/blog-post.tsx"),
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
  totalCount: number, postsPerPage: number, type: QueryType, param?: string
) => {
  const nPages = Math.ceil(totalCount / postsPerPage)
  let basePath = ''
  switch (type) {
    case QueryType.TAG:
      basePath = `/blog/tags/${param}`
      break
    case QueryType.CATEGORY:
      basePath = `/blog/categories/${param}`
      break
  }

  return Array.from({
    length: nPages
  }).map((_, index) => ({
      path: index === 0 ? basePath  : `${basePath}/pages/${index + 1}`,
      component: resolve(__dirname, "../src/templates/blog-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        type,
        param
      }
    })
  )
}

export const createPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const  data = await graphql(`
    {
      posts: allMarkdownRemark(
        sort: {
          fields: [frontmatter___date, frontmatter___time]
          order: DESC
        }
      ) {
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
    }`
  )
  /**
   * Create pages for each blog posts
   */
  console.log(data)
  /*generatePagesWithSiblingPages(
    data.posts.edges,
    data.posts.totalCount,
    false
  ).forEach(value => createPage(value))*/

  /*data.posts.groupByCategory.forEach(({ edges, totalCount }) => {
    generatePagesWithSiblingPages(
      edges, totalCount, true
    ).forEach(value => createPage(value))
  })

  generatePagination(data.posts.totalCount, 10, QueryType.NONE).forEach(value => createPage(value))*/

}