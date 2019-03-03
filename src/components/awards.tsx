import * as React from "react"
import { Item } from "semantic-ui-react"
import { AwardData } from "../props"
import { graphql, useStaticQuery } from "gatsby"

const Awards: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <Item.Group divided>
      {
        items.map(item => <AwardItem data={item}/>)
      }
    </Item.Group>
  )
}

const AwardItem: React.FunctionComponent<ItemProps> = ({
   data
}) => {
  const {id, year, organization, award, description} = data

  return (
    <Item key={id}>
      <Item.Content>
        <Item.Header>
          {award}
        </Item.Header>
        <Item.Meta>
          {year}. {organization}
        </Item.Meta>
        <Item.Description>
          {description}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

interface ItemProps {
  data: AwardData
}

interface Props {
  items: Array<AwardData>
}

interface QueryResult {
  data: {
    awards: {
      edges: Array<{
        node: AwardData
      }>
    }
  }
}
export default () => {
  const { data } : QueryResult = useStaticQuery(graphql`
    query {
      awards: allAwardsCsv(
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
          }
        }
      }
    }`
  )
  return (
    <Awards items={data.awards.edges.map(({ node }) => node)}/>
  )
}