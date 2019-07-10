import * as React from 'react'
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import BlogList from "../components/blog/post-list"
import { formatPagePath } from "../utils"
import { MarkdownRemarkNodeType } from "../types"
import SEO from "../components/common/seo"

export default ({ data, pageContext } : Props) => {
  const { param, currentPage, totalPage, totalCount } = pageContext
  return (
    <Layout>
      <SEO title={ param === '*' ? 'Blog' : `Category: ${param}` }
           description={ param === '*' ? 'List of all posts' : `List of posts categorized as ${param}`}/>
      <BlogList items={data.posts.edges}
                header={param === '*' ? undefined:
                  <div>
                    {`${totalCount} posts categorized as `}
                    <span style={{fontStyle: 'italic'}}>
                      {`"${param}"`}
                    </span>
                  </div>
                }
                currentPage={currentPage}
                onPageChange={ page => navigate(formatPagePath(page - 1, 'category', param === '*' ? undefined : param))}
                totalPage={totalPage}/>
    </Layout>
  )
}

export const query = graphql`
  query listBlogPostsByCategory($skip: Int!, $limit: Int!, $param: String!) {
    posts: allMarkdownRemark(
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          category: {
            glob: $param
          }
        }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 360)
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