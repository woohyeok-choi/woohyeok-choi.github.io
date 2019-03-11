import * as React from 'react'
import { graphql, navigate } from "gatsby"
import Layout from "../components/common/layout"
import BlogList from "../components/blog/main-post-list"
import { MarkdownRemarkNodeType } from "../types"
import { formatPagePath } from "../utils"

export default ({ data, pageContext } : Props) => {
  const { param, currentPage, totalPage, totalCount } = pageContext
  return (
    <Layout>
      <BlogList items={data.posts.edges}
                header={param === '*' ? undefined:
                  <div>
                    {`${totalCount} posts tagged with `}
                    <span style={{fontStyle: 'italic'}}>
                      {`"${param}"`}
                    </span>
                  </div>
                }
                currentPage={currentPage}
                onPageChange={ page => navigate(formatPagePath(page - 1, 'tag', param === '*' ? undefined : param))}
                totalPage={totalPage}/>
    </Layout>
  )
}

export const query = graphql`
  query listBlogPostsByTag($skip: Int!, $limit: Int!, $param: String!) {
    posts: allMarkdownRemark(
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          tags: {
            eq: $param
          }
        }
      }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            preview {
              childImageSharp {
                resize(height: 150, width: 150, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
          fields {
            slug
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

interface PageContext {
  currentPage: number
  totalPage: number
  limit: number
  skip: number
  param: string
  totalCount?: number
}

interface QueryResult {
  posts: {
    edges: Array<MarkdownRemarkNodeType>
  }
}

interface Props {
  data: QueryResult
  pageContext: PageContext
}