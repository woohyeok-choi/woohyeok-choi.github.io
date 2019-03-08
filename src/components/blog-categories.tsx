import * as React from "react"
import { List } from "semantic-ui-react"
import { graphql, useStaticQuery } from "gatsby"
import { formatPagePath } from "../utils"

const BlogCategories: React.FunctionComponent<Props> = ({ items }) => {
  return (
    <List link bulleted>
      {
        items.map(({ category, link, count }) =>
          <List.Item key={category}
                     href={link}>
            {category} ({count})
          </List.Item>
        )
      }
    </List>
  )
}

export default () => {
  const { categories }: QueryResult = useStaticQuery(graphql`
    query {
      categories: allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
        totalCount
      }
    }`,
  )
  const { totalCount, group } = categories
  const items = [
    {
      category: "All",
      count: totalCount,
      link: formatPagePath(0, "none"),
    },
    ...group.map(({ fieldValue, totalCount }) => ({
      category: fieldValue,
      count: totalCount,
      link: formatPagePath(0, "category", fieldValue),
    })),
  ]

  return (
    <BlogCategories items={items} />
  )
}

interface QueryResult {
  categories: {
    group: Array<{
      fieldValue
      totalCount
    }>
    totalCount: number
  }
}


interface Props {
  items: Array<{
    category: string
    count?: number
    link?: string
  }>
}