import * as React from "react"
import { Container, Header, Segment } from "semantic-ui-react"
import { Element } from "react-scroll"
import About from "../components/main/about"
import Publications from "../components/main/publications"
import AcademicServices from "../components/main/academic-services"
import Affiliations from "../components/main/affiliations"
import ResearchPreview from "../components/main/research-preview"
import Awards from "../components/main/awards"
import BlogPreview from "../components/main/blog-preview"
import Layout from "../components/common/layout"
import { paramCase } from "change-case"
import ResponsiveContainer from "../components/main/container"
import LinkedSpan from "../components/common/linked-span"

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

