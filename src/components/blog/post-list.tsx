import * as React from "react"
import { MarkdownRemarkNodeType } from "../../types"
import { Label, Item, Header, Segment, Card, Pagination } from "semantic-ui-react"
import { formatReadableDate } from "../../utils"
import { DesktopContainer, MobileContainer } from "./container"
import { ScreenSize, withScreenSize } from "../common/with-screen-size"

const BlogListItem: React.FunctionComponent<ItemProps> = ({ data }) => {
  const { node } = data
  const { frontmatter, fields, excerpt } = node
  const { title, date, preview } = frontmatter
  const { slug, category, tags } = fields

  return (
    <Card style={{ width: "100%" }} href={slug}>
      <Card.Content>
        <Item.Group>
          <Item>
            {
              preview && <Item.Image size={"small"} src={preview.childImageSharp.resize.src}/>
            }
            <Item.Content>
              <Item.Extra style={{ marginBottom: "5px" }}>
                {category.name}
              </Item.Extra>
              <Item.Header>{title}</Item.Header>
              <Item.Meta>{formatReadableDate(date)}</Item.Meta>
              <Item.Description>{excerpt}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card.Content>
      {tags &&
      <Card.Content extra>
        <Label.Group>
          {tags.map(({ name }) => <Label key={name} content={name} size={"mini"}/>)}
        </Label.Group>
      </Card.Content>
      }
    </Card>
  )
}

const Content: React.FunctionComponent<DefaultProps> = ({ header, items, currentPage, totalPage, onPageChange }: DefaultProps) => (
  <div>
    {header && <Header as={"h1"} dividing>{header}</Header>}
    {items ?
      items.map(item => <BlogListItem key={item.node.id} data={item}/>) :
      <Header as={"h1"} content={"No post"}/>
    }
    <Segment vertical padded textAlign={"center"}>
      <Pagination
        totalPages={totalPage}
        activePage={currentPage}
        ellipsisItem={undefined}
        boundaryRange={0}
        siblingRange={2}
        prevItem={undefined}
        nextItem={undefined}
        onPageChange={(_, { activePage }) => {
          onPageChange(activePage)
        }}
      />
    </Segment>
  </div>
)

const ResponsiveContent: React.FunctionComponent<Props> = ({ header, items, currentPage, totalPage, onPageChange, screenSize }: Props) => {
  const content = <Content header={header} items={items} totalPage={totalPage} onPageChange={onPageChange}/>
  return (
    screenSize === "mobile" ?
      <MobileContainer children={content}/> :
      <DesktopContainer children={content}/>
  )
}

export default withScreenSize(ResponsiveContent)

interface DefaultProps {
  header?: React.ReactNode
  onPageChange?: (number) => void
  currentPage?: number
  totalPage?: number
  items: Array<MarkdownRemarkNodeType>
}

interface Props extends DefaultProps {
  screenSize?: ScreenSize
}

interface ItemProps {
  data: MarkdownRemarkNodeType
}