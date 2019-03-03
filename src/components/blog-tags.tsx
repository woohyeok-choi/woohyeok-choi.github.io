import * as React from 'react'
import { Label } from "semantic-ui-react"
import { graphql, StaticQuery } from "gatsby"

const BlogTags: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <Label.Group>
      {
        items.map(item =>
          <Label as={'a'} href={item.link}>
            { item.tag } ({item.count})
          </Label>
        )
      }
    </Label.Group>
  )
}

export default () => (
  <StaticQuery query={graphql`
    query {
      blogTags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }`
  } render={ (data) =>
    <BlogTags items={
      data.blogTags.group.map(datum => ({
        tag: datum.fieldValue,
        count: datum.totalCount,
        link: 'asdf'
      }))
    } />
  }/>
)

interface Props {
  items: Array<{
    tag: string
    count: number
    link?: string
  }>
}