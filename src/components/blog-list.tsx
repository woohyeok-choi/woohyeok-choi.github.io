import * as React from "react"
import { MarkdownRemarkNodeType } from "../types"
import { Label, Item } from "semantic-ui-react"
import { formatReadableDate } from "../utils"

const BlogListItem: React.FunctionComponent<ItemProps> = ({ data, isAlias }) => {
  const { node } = data
  const { id, frontmatter, fields, excerpt } = node
  const { title, date } = frontmatter
  const { slug, category, tags } = fields

  return (
   <Item key={id}>
     <Item.Content>
       <Item.Header as={'a'} href={isAlias ? slug.alias : slug.origin }>
         {title}
       </Item.Header>
       <Item.Meta>
         {formatReadableDate(date)}
       </Item.Meta>
       <Item.Description>
         {excerpt}
       </Item.Description>
       <Item.Extra>
         <p>
           Category: <a href={category.slug}>{category.name}</a>
         </p>
         <p>
           {tags &&
           <Label.Group>
             {tags.map(({slug, name}) => <Label size={"mini"} as='a' href={slug}>{name}</Label>)}
           </Label.Group>
           }
         </p>
       </Item.Extra>
     </Item.Content>
   </Item>
  )
}


export default (props : Props) => {
  const { isAlias = false, items } = props
  return (
    <Item.Group divided>
      {
        items.map(item => <BlogListItem data={item} isAlias={isAlias}/>)
      }
    </Item.Group>
  )
}

interface Props {
  isAlias: boolean
  items: Array<MarkdownRemarkNodeType>
}

interface ItemProps {
  isAlias: boolean
  data: MarkdownRemarkNodeType
}