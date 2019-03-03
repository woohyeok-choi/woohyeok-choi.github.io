import * as React from 'react'
import { List } from "semantic-ui-react"
import { graphql, StaticQuery } from "gatsby"

const BlogRecentPosts: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <List link>
      {
        items.map(item =>
          <List.Item as={'a'} href={item.link} icon={'triangle right'} content={item.title}/>
        )
      }
    </List>
  )
}

export default () => (
  <StaticQuery query={graphql`
    query {
      recentPosts: allMarkdownRemark(sort: {fields: frontmatter___datetime, order: DESC}, limit: 10) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }`
  } render={ (data) =>
    <BlogRecentPosts items={
      data.recentPosts.edges.map(datum => ({
        title: datum.node.frontmatter.title,
        link: datum.node.id,
      }))
    }/>
  }/>
)

interface Props {
  items: Array<{
    title: string
    link?: string
  }>
}