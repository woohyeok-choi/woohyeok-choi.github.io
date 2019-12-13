import * as React from 'react'
import { Item, Label } from "semantic-ui-react"
import { ContactType } from "../../../types"
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
              <Label key={'mail'} as={'a'} content={'woohyeok.choi@kaist.ac.kr'} icon={'mail'} href={'mailto:woohyeok.choi@kaist.ac.kr'} target={'_blank'}/>
              <Label key={'cv'} as={'a'} content={'CV'} icon={'address card outline'} href={'https://docs.google.com/document/d/1Dp_4mlDwxLz_7JbP7-EZXxcpFqCOstr_rBQFI0OYxV0/edit?usp=sharing'} target={'_blank'}/>
              <Label key={'github'} as={'a'} content={'Github'} icon={'github'} href={'https://github.com/woohyeok-choi'} target={'_blank'}/>
              <Label key={'docker'} as={'a'} content={'DockerHub'} icon={'docker'} href={'https://hub.docker.com/u/woohyeokchoi'} target={'_blank'}/>
              <Label key={'google-scholar'} as={'a'} target={'_blank'}
                     href={'https://scholar.google.co.kr/citations?hl=en&view_op=list_works&gmla=AJsN-F44GM-jHORGEa84LMkyToX3NgzfRpX-vtrS7ZRLswPVafM0j-Vq-6UrvPyxOFAVYUDFX9JryLwATJf08kDOKVx2vxGPwbX6iiPAZ5JM3wu-XySrjk0&user=PaIwvKYAAAAJ'}>
                <i className="ai ai-google-scholar-square" style={{margin: '0 .75em 0 0'}}/>Google Scholar
              </Label>
              <Label key={'researchgate'} as={'a'} content={'ResearchGate'} href={'https://www.researchgate.net/profile/Woohyeok_Choi2'} target={'_blank'}/>
              <Label key={'pypi'} as={'a'} content={'PyPi'} href={'https://pypi.org/user/keltpower0/'} target={'_blank'}/>

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
