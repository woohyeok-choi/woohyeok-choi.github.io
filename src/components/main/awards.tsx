import * as React from "react"
import { Item } from "semantic-ui-react"
import { AwardType } from "../../types"
import { graphql, useStaticQuery } from "gatsby"
import LinkedSpan from "../common/linked-span"

const Awards: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <Item.Group divided>
      {
        items.map(item => <AwardItem data={item} key={item.id}/>)
      }
    </Item.Group>
  )
}

const AwardItem: React.FunctionComponent<ItemProps> = ({
   data
}) => {
  const { year, organization, award, description, url } = data

  return (
    <Item>
      <Item.Content>
        <Item.Header>
          {award}
        </Item.Header>
        <Item.Meta>
          {year}. {organization}
        </Item.Meta>
        <Item.Description>
          <p>
            {description}
          </p>
          <p>
            { url && <a href={url} target={'_blank'}><LinkedSpan inverted={false} children={'LINK'}/></a>}
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

interface ItemProps {
  data: AwardType
}

interface Props {
  items: Array<AwardType>
}

interface QueryResult {
  awards: {
    edges: Array<{
      node: AwardType
    }>
  }

}
export default () => {
  const { awards } : QueryResult = useStaticQuery(graphql`
    query {
      awards: allAchievementXlsxAwards (
        sort: {
          fields: date
          order: DESC
        }
      ) {
        edges {
          node {
            id
            year
            organization
            award
            description
            url
          }
        }
      }
    }`
  )
  return (
    <Awards items={awards.edges.map(({ node }) => node)}/>
  )
}