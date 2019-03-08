import * as React from "react"
import { Label } from "semantic-ui-react"
import { graphql, useStaticQuery } from "gatsby"
import { formatPagePath } from "../utils"

const BlogTags: React.FunctionComponent<Props> = ({ items }) => {
  return (
    <Label.Group>
      {
        items.map(({ tag, link, count }) =>
          <Label key={tag} as={"a"} href={link}>
            {tag} ({count})
          </Label>,
        )
      }
    </Label.Group>
  )
}

export default () => {
  const { tags }: QueryResult = useStaticQuery(graphql`
    query {
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }`,
  )
  return (
    <BlogTags items={
      tags.group.map(({ fieldValue, totalCount }) => ({
        tag: fieldValue,
        count: totalCount,
        link: formatPagePath(0, "tag", fieldValue),
      }))
    }/>
  )
}


interface QueryResult {
  tags: {
    group: Array<{
      fieldValue: string
      totalCount: number
    }>
  }
}

interface Props {
  items: Array<{
    tag: string
    count: number
    link?: string
  }>
}