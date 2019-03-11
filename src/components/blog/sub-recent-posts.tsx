import * as React from "react"
import { List } from "semantic-ui-react"
import { graphql, useStaticQuery } from "gatsby"
import { MarkdownRemarkNodeType } from "../../types"

export default () => {
  const { posts }: QueryResult = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
        edges {
          node {
            frontmatter {
              title
            }
            htmlAst
            fields {
              slug 
            }
          }
        }
      }
    }`
  )
  return (
    <List link bulleted>
      {
        posts.edges.map(({ node }) =>
          <List.Item key={node.fields.slug} as={"a"} href={node.fields.slug} content={node.frontmatter.title}/>,
        )
      }
    </List>
  )
}


interface QueryResult {
  posts: {
    edges: Array<MarkdownRemarkNodeType>
  }
}
