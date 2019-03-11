import * as React from "react"
import { MarkdownRemarkNodeType } from "../../types"
import { Label, Item, Header, Segment, Card, Pagination } from "semantic-ui-react"
import { formatReadableDate } from "../../utils"
import BlogContainer from './container'

const BlogListItem: React.FunctionComponent<ItemProps> = ({ data }) => {
  const { node } = data
  const { frontmatter, fields, excerpt } = node
  const { title, date, preview } = frontmatter
  const { slug, category, tags } = fields

  return (
   <Card style={{width: '100%'}} href={slug}>
     <Card.Content>
       <Item.Group>
         <Item>
           {
             preview && <Item.Image size={'small'} src={preview.childImageSharp.resize.src}/>
           }
           <Item.Content>
             <Item.Extra style={{marginBottom: '5px'}}>
               { category.name }
             </Item.Extra>
             <Item.Header>{title}</Item.Header>
             <Item.Meta>{formatReadableDate(date)}</Item.Meta>
             <Item.Description>{excerpt}</Item.Description>
           </Item.Content>
         </Item>
       </Item.Group>
     </Card.Content>
     { tags &&
     <Card.Content extra>
       <Label.Group>
         { tags.map(({name}) => <Label key={name} content={name} size={'mini'}/>) }
       </Label.Group>
     </Card.Content>
     }
   </Card>
  )
}


export default ({header, items, currentPage, totalPage, onPageChange }: Props) => {
  return (
    <BlogContainer>
      { header && <Header as={'h1'} dividing>{ header }</Header> }
      { items ?
        items.map(item => <BlogListItem key={item.node.id} data={item}/>) :
        <Header as={'h1'} content={'No post'}/>
      }
      <Segment vertical padded textAlign={'center'}>
        <Pagination
          totalPages={totalPage}
          activePage={currentPage}
          ellipsisItem={undefined}
          boundaryRange={0}
          siblingRange={2}
          prevItem={undefined}
          nextItem={undefined}
          onPageChange={ (_, { activePage }) => {
            onPageChange(activePage)
          }}
        />
      </Segment>
    </BlogContainer>
  )
}

interface Props {
  header?: React.ReactNode
  onPageChange?: (number) => void
  currentPage?: number
  totalPage?: number
  items: Array<MarkdownRemarkNodeType>
}

interface ItemProps {
  data: MarkdownRemarkNodeType
}