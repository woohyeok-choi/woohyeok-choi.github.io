import * as React from 'react'
import { Container, Grid } from "semantic-ui-react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import BlogContainer from '../components/blog-container'
import { MarkdownRemarkNodeType } from "../types"
import { formatPagePath } from "../utils"

export default ({ data, pageContext } : Props) => {
  return (
    <Layout>
      <BlogContainer/>
    </Layout>
  )
}

export const query = graphql`
  query listBlogPosts($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug {
              origin
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

interface PageContext {
  currentPage: number
  totalPage: number
  limit: number
  skip: number
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