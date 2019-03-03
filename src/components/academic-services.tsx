import * as React from "react"
import { List } from "semantic-ui-react"
import { AcademicServiceData } from "../props"
import { graphql, StaticQuery } from "gatsby"

const AcademicServices: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <List bulleted>
      {items.map(
        item =>
          <List.Item key={item.id}>
            <List.Content>
              <List.Header>
                {item.year}. {item.service}
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
  items: Array<AcademicServiceData>
}

export default () => (
  <StaticQuery query={graphql`
  query {
    academicServices: allAcademicServicesCsv (
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
          service
        }
      }
    }
  }`} render={
    (data) =>
        <AcademicServices items={data.academicServices.edges.map(datum => datum.node)}/>
  }/>
)
