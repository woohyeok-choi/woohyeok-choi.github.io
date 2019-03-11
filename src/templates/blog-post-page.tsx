import * as React from 'react'
import Layout from "../components/common/layout"
import BlogContent from '../components/blog/main-post-page'
import { MarkdownRemarkNodeType } from "../types"
import { graphql } from "gatsby"
import SEO from "../components/common/seo"

export default ({ data, pageContext } : Props) => {
  const { node } = data
  const { frontmatter, fields, excerpt } = node
  const { title, lang } = frontmatter
  const { category, tags } = fields
  const { nextPost, prevPost } = pageContext

  return (
    <Layout>
      <SEO title={ title }
           lang={ lang }
           keywords={[category.name, ...tags.map(({name}) => name)]}
           description={ excerpt }/>
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
      excerpt(pruneLength: 140)
      frontmatter {
        title
        date
        lang
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