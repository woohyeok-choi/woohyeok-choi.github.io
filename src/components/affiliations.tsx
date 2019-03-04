import * as React from "react"
import { List } from "semantic-ui-react"
import { AffiliationType } from "../types"
import { graphql, useStaticQuery } from "gatsby"

const Affiliations: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <List bulleted>
      {items.map(
        item =>
          <List.Item key={item.id}>
            <List.Content>
              <List.Header>
                {item.year}. {item.position}
              </List.Header>
              <List.Description>
                {item.organization}
              </List.Description>
            </List.Content>
          </List.Item>
      )}
    </List>
  )
}


interface Props {
  items: Array<AffiliationType>
}

interface QueryResult {
  data: {
    affiliations: {
      edges: Array<{
        node: AffiliationType
      }>
    }
  }
}

export default () => {
  const { data } : QueryResult = useStaticQuery(graphql`
    query {
      affiliations: allAffiliationsCsv(
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
            position
          }
        }
      }
    }`
  )
  return (
    <Affiliations items={data.affiliations.edges.map(({ node }) => node)}/>
  )
}