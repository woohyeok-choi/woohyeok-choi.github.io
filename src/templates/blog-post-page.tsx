import * as React from 'react'
import Layout from "../components/common/layout"
import BlogContent from '../components/blog/main-post-page'
import { MarkdownRemarkNodeType } from "../types"
import { graphql } from "gatsby"

export default ({ data, pageContext } : Props) => {
  const { nextPost, prevPost } = pageContext
  return (
    <Layout>
      <BlogContent data={data} nextPost={nextPost} prevPost={prevPost}/>
    </Layout>
  )
}

interface Props {
  data: MarkdownRemarkNodeType
  pageContext: {
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
  query getPosts($slug: String!) {
    node: markdownRemark(fields: {
      slug: {
        eq: $slug
      }
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