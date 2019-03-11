import * as React from 'react'
import { Grid, Icon, Image, Item, Label } from "semantic-ui-react"
import { ContactType } from "../../types"
import { graphql, useStaticQuery } from "gatsby"

const About: React.FunctionComponent<Props> = ({
  content, contacts, imagePath
}) => {
  return (
    <Item.Group>
      <Item>
        <Item.Image size={'medium'} src={imagePath}/>
        <Item.Content verticalAlign={'middle'}>
          <Item.Description style={{color: 'white', fontSize: '1.1em', lineHeight: '2.0em'}}>
            {content}
          </Item.Description>
          <Item.Extra>
            <Label.Group style={{marginTop: '15px'}}>
              {contacts.map(contact =>
                <Label key={contact.id} as={'a'} content={contact.name} icon={contact.icon} href={contact.url} target={'_blank'}/>
              )}
              <Label key={'google-scholar'} as={'a'}  target={'_blank'} href={'https://scholar.google.co.kr/citations?hl=en&view_op=list_works&gmla=AJsN-F44GM-jHORGEa84LMkyToX3NgzfRpX-vtrS7ZRLswPVafM0j-Vq-6UrvPyxOFAVYUDFX9JryLwATJf08kDOKVx2vxGPwbX6iiPAZ5JM3wu-XySrjk0&user=PaIwvKYAAAAJ'}><i className="ai ai-google-scholar-square" style={{margin: '0 .75em 0 0'}}/>Google Scholar</Label>
            </Label.Group>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

interface DefaultProps {
  content: React.ReactNode
  imagePath?: string
}

interface Props extends DefaultProps{
  contacts: Array<ContactType>
}

interface QueryResult {
  contacts: {
    edges: Array<{
      node: ContactType
    }>
  }

}

export default (props: DefaultProps) => {
  const { contacts } : QueryResult = useStaticQuery(graphql`
    query {
      contacts: allAchievementXlsxContacts {
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
  )
  return (
    <About contacts={contacts.edges.map(({ node }) => node)} {...props}/>
  )
}
