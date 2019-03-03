import * as React from 'react'
import { List } from "semantic-ui-react"
import { graphql, StaticQuery } from "gatsby"

const BlogCategories: React.FunctionComponent<Props> = ({
  indexLink, items, activeCategory = 'All'
}) => {
  return (
    <List link>
      <List.Item as={'a'} href={indexLink} active={activeCategory === 'All'}>
        <List.Icon name={'folder'}/>
          All (
          {
            items.map(category => category.count).reduce((acc, curVal) => acc + curVal)
          })
      </List.Item>
      {
        items.map(item =>
          <List.Item as={'a'} href={item.link} active={activeCategory === item.category}>
            <List.Icon name={'folder'}/>
            {item.category} ({item.count})
          </List.Item>
        )
      }
    </List>
  )
}

export default (props: DefaultProps) => (
  <StaticQuery query={graphql`
    query {
      blogCategories: allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }`
  } render={ (data) =>
    <BlogCategories items={
      data.blogCategories.group.map(datum => ({
        category: datum.fieldValue,
        count: datum.totalCount,
        link: 'asdf'
      }))
    } {...props} />
  }/>
)

interface DefaultProps {
  indexLink?: string
  activeCategory?: string
}

interface Props extends DefaultProps {
  items: Array<{
    category: string
    count?: number
    link?: string
  }>
}