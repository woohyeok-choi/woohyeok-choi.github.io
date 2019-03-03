import * as React from "react"
import { List } from "semantic-ui-react"
import { AffiliationData } from "../props"
import { graphql, StaticQuery } from "gatsby"

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
  items: Array<AffiliationData>
}

export default () => (
  <StaticQuery query={graphql`
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
    }
  `} render={ (data) =>
    <Affiliations items={data.affiliations.edges.map(datum => datum.node)}/>
  }/>
)