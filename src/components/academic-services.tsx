import * as React from "react"
import { List } from "semantic-ui-react"
import { AcademicServiceType } from "../types"
import { graphql, useStaticQuery } from "gatsby"

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
  items: Array<AcademicServiceType>
}

interface QueryResult {
  data: {
    academicServices: {
      edges: Array<{
        node: AcademicServiceType
      }>
    }
  }
}

export default () => {
  const { data } : QueryResult = useStaticQuery(graphql`
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
    }`
  )
  return (
    <AcademicServices items={data.academicServices.edges.map(({ node }) => node)}/>
  )
}