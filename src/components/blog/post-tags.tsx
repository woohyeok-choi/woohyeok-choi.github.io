import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Header, Label, Segment } from "semantic-ui-react"
import { formatPagePath } from "../../utils"
import { DesktopContainer, MobileContainer } from "./container"
import { ScreenSize, withScreenSize } from "../common/with-screen-size"

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const AlphabeticalTagItem: React.FunctionComponent<ItemProps> = ({ items, alphabet }: ItemProps) => (
  <Segment padded={"very"} vertical basic>
    <Header as={"h3"} content={alphabet}/>
    <Label.Group>
      {
        items.sort(({ tag: a }, { tag: b }) =>
          ("" + a).localeCompare(b),
        ).map(({ tag, count, link }) =>
          <Label key={tag} href={link}>
            {tag} ({count})
          </Label>,
        )
      }
    </Label.Group>
  </Segment>
)

const Content: React.FunctionComponent<{}> = () => {
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
  const { group } = tags

  return (
    <div>
      <Header as={"h1"} dividing>Tags</Header>
      {
        alphabet.map((value) => {
          const tags = group.filter(({ fieldValue }) =>
            fieldValue.toLowerCase().startsWith(value),
          ).map(({ fieldValue, totalCount }) => ({
            tag: fieldValue,
            count: totalCount,
            link: formatPagePath(0, "tag", fieldValue),
          }))
          if (tags && tags.length)
            return (
              <AlphabeticalTagItem key={value} items={tags} alphabet={value.toUpperCase()}/>
            )
        })
      }
    </div>
  )
}


const ResponsiveContent: React.FunctionComponent<Props> = ({ screenSize }: Props) => {
  const content = <Content/>
  return (
    screenSize === "mobile" ?
      <MobileContainer children={content}/> :
      <DesktopContainer children={content}/>
  )
}

export default withScreenSize(ResponsiveContent)

interface ItemProps {
  items: Array<{
    tag: string
    count: number
    link?: string
  }>
  alphabet: string
}

interface Props {
  screenSize?: ScreenSize
}

interface QueryResult {
  tags: {
    group: Array<{
      fieldValue: string
      totalCount: number
    }>
  }
}
