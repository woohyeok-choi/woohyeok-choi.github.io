import * as React from 'react'
import { Grid, Image, Label } from "semantic-ui-react"
import { ContactData } from "../props"
import { graphql, StaticQuery } from "gatsby"

const About: React.FunctionComponent<Props> = ({
  content, contacts, imagePath
}) => {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src={imagePath} rounded size={'medium'} verticalAlign={'top'}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <p>
            {content}
          </p>
          <p style={{position: 'absolute', bottom: '0'}}>
            {contacts.map(contact =>
              <Label key={contact.id} as={'a'} content={contact.name} icon={contact.icon} href={contact.url} target={'_blank'}/>
            )}
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

interface DefaultProps {
  content: React.ReactNode
  imagePath?: string
}

interface Props extends DefaultProps{
  contacts: Array<ContactData>
}

export default (props: DefaultProps) => (
  <StaticQuery query={graphql`
    query {
      contacts: allContactsCsv {
        edges {
          node {
            id
            name
            url
            icon
          }
        }
      }
    }`
  } render={
    (data) =>
      <About contacts={data.contacts.edges.map(datum => datum.node)} {...props}/>
  }/>
)

