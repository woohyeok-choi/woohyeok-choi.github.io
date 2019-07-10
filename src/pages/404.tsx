import * as React from "react"
import SEO from "../components/common/seo"
import Layout from "../components/layout"
import { Container, Header, Segment } from "semantic-ui-react"
import LinkedSpan from "../components/common/linked-span"

export default () => (
  <Layout>
    <SEO title="Page Not found"/>
    <Segment vertical padded style={{marginLeft: '1em'}}>
      <Header as={'h1'} content={'Page Not found'}/>
      <Header as={'h3'}>
        <a href={'/'}>
          <LinkedSpan inverted={false}>Return to main</LinkedSpan>
        </a>
      </Header>
    </Segment>
  </Layout>
)

