import * as React from "react"
import { List } from "semantic-ui-react"
import { AcademicServiceData } from "../data"

class AcademicServices extends React.Component<Props> {
  render(): React.ReactNode {
    const { items } = this.props
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
}

interface Props {
  items: Array<AcademicServiceData>
}

export default AcademicServices