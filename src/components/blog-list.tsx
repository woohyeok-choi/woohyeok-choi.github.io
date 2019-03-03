import * as React from "react"
import { BlogItemData } from "../props"
import { Container, Label, Segment, Item } from "semantic-ui-react"

const BlogList: React.FunctionComponent<Props> = ({ items }) => {

  return (
    <Item.Group>
    {
      items.map(item =><BlogListItem data={item}/>)
    }
    </Item.Group>
  )
}

const BlogListItem: React.FunctionComponent<ItemProps> = ({ data }) => {
  const { link, excerpt, frontmatter } = data
  const { title, datetime, category, tags } = frontmatter

  return (
    <Item>
      <Item.Content>
        <Item.Header as={'a'} href={link}>{title}</Item.Header>
        <Item.Meta>{datetime}</Item.Meta>
        <Item.Description>
          {excerpt}
        </Item.Description>
        <Item.Extra>
          <p>
            Category: {category}
          </p>
          <p>
            { tags &&
            <Label.Group>
              {tags.map(tag => <Label size={'mini'} as='a'>{tag}</Label>)}
            </Label.Group>
            }
          </p>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

interface Props {
  items: Array<BlogItemData>
}

interface ItemProps {
  data: BlogItemData
}