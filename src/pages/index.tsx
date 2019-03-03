import * as React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import HeaderMenu from "../components/HeaderMenu"
import About from "../components/about"
import { Container, Header } from "semantic-ui-react"
import Publications from "../components/publications"
import AcademicServices from "../components/academic-services"
import Affiliations from "../components/affiliations"
import ResearchPreview from "../components/research-preview"
import Awards from "../components/awards"
import BlogPreview from "../components/blog-preview"
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
    <div>
      <Container>
        <HeaderMenu/>
      </Container>
      <Container>
        <About
          content={<b> asdfdf</b>}
          imagePath={require('../images/about.jpg')}
        />
      </Container>
      <Container>
        <Header as={'h2'} content={'RESEARCH PROJECTS'} textAlign={'left'} dividing/>
        <ResearchPreview/>
      </Container>
      <Container>
        <Header as={'h2'} content={'PUBLICATIONS'} textAlign={'left'} dividing/>
        <Publications/>
      </Container>
      <Container>
        <Header as={'h2'} content={'AWARDS & HONOURS'} textAlign={'left'} dividing/>
        <Awards/>
      </Container>
      <Container>
        <Header as={'h2'} content={'ACADEMIC SERVICES'} textAlign={'left'} dividing/>
        <AcademicServices/>
      </Container>
      <Container>
        <Header as={'h2'} content={'AFFILIATIONS'} textAlign={'left'} dividing/>
        <Affiliations/>
      </Container>
      <Container>
        <Header as={'h2'} textAlign={'left'} dividing>
          RECENT POST
          <Header.Subheader as={'a'} href={'asdf'} style={{lineHeight: '3em', float: 'right'}}>
            Read all <Icon fitted size={'small'} name={"angle right"}/>
          </Header.Subheader>
        </Header>
        <BlogPreview/>
      </Container>
    </div>
    </Layout>
  )
}
