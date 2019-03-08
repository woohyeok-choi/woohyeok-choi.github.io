import * as React from 'react'
import Layout from "../components/layout"
import BlogContent from '../components/blog-content'
import { MarkdownRemarkNodeType } from "../types"
import { graphql } from "gatsby"

export default ({ data, pageContext } : Props) => {

  return (
    <Layout>
      <BlogContent data={data}/>
    </Layout>
  )
}

interface Props {
  data: MarkdownRemarkNodeType
  pageContext: {
    postId?: string
    alias?: boolean
    nextPost?: {
      title?: string
      slug?: string
    }
    prevPost?: {
      title?: string
      slug?: string
    }
  }
}

export const query = graphql`
  query getPosts($postId: String!) {
    node: markdownRemark(id: {
      eq: $postId
    }) {
      html
      frontmatter {
        title
        date
      }
      fields {
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
  }`