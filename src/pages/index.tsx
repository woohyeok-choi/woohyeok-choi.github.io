import * as React from "react"
import { Container, Header, Segment, Responsive } from "semantic-ui-react"
import { Element } from "react-scroll"
import About from "../components/about"
import Publications from "../components/publications"
import AcademicServices from "../components/academic-services"
import Affiliations from "../components/affiliations"
import ResearchPreview from "../components/research-preview"
import Awards from "../components/awards"
import BlogPreview from "../components/blog-preview"
import Layout from "../components/layout"
import { paramCase } from "change-case"
import ResponsiveContainer from "../components/container"
import LinkedSpan from "../components/linked-span"

const menuItems = ["About", "Research", "Publications", "Awards & Honours", "Academic Services", "Affiliations", "Posts"].map(item => ({
  name: item,
  key: paramCase(item),
}))

export default () => (
  <Layout>
    <ResponsiveContainer menuItems={menuItems}>
      <Segment inverted vertical as={Element} name={paramCase("About")} basic>
        <Container>
          <About
            content={
              <div>
                <p>
                  Choi, Woohyeok is a 5th-year Ph.d student in the <a href={"https://iclab.kaist.ac.kr"}
                                                                      target={"_blank"}><LinkedSpan inverted={true}
                                                                                                    children={"Interactive Computing Lab (ICLab)"}/></a> at <a
                  href={"https://www.kaist.ac.kr"} target={"_blank"}><LinkedSpan inverted={true}
                                                                                 children={"Korea Advanced Institute of Science and Technology (KAIST)"}/></a>.
                  His research interest focuses on building interactive
                  applications that promote physical health, including exertion-based games, physical activity
                  promotion at work, and mobile-based health intervention. Throughout his studies, he has had a
                  variety of expertise: front-/back-end development, hardware prototyping, machine learning, and
                  statistical analysis.
                </p>
                <p>
                  If you're interested in working with him, please contact:
                </p>
              </div>
            }
            imagePath={require("../images/about.jpg")}
          />
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={paramCase("Research")} basic>
        <Container>
          <Header as={"h1"} content={"RESEARCH PROJECTS"} textAlign={"left"}/>
          <ResearchPreview/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={paramCase("Publications")} basic>
        <Container>
          <Header as={"h1"} content={"PUBLICATIONS"} textAlign={"left"}/>
          <Publications/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={paramCase("Awards & Honours")} basic>
        <Container>
          <Header as={"h1"} content={"AWARDS & HONOURS"} textAlign={"left"}/>
          <Awards/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={paramCase("Academic Services")} basic>
        <Container>
          <Header as={"h1"} content={"ACADEMIC SERVICES"} textAlign={"left"}/>
          <AcademicServices/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={paramCase("Affiliations")} basic>
        <Container>
          <Header as={"h1"} content={"AFFILIATIONS"} textAlign={"left"}/>
          <Affiliations/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} style={{ minHeight: 1000 }} as={Element} name={paramCase("Posts")} basic>
        <Container>
          <Header as={"h1"} textAlign={"left"} content={"RECENT POSTS"}/>
          <BlogPreview/>
        </Container>
      </Segment>
    </ResponsiveContainer>
  </Layout>
)

