import * as React from "react"
import { kebabCase } from "lodash"
import { ScreenSize, withScreenSize } from "../common/with-screen-size"
import { Container, Header, Segment } from "semantic-ui-react"
import { Element } from "react-scroll"
import { DesktopContainer, MobileContainer } from "./container"
import About from "./sub/about"
import Publications from "./sub/publications"
import AcademicServices from "./sub/academic-services"
import Affiliations from "./sub/affiliations"
import ResearchPreview from "./sub/research-preview"
import Awards from "./sub/awards"
import BlogPreview from "./sub/blog-preview"
import LinkedSpan from "../common/linked-span"

const menuItems = ["About", "Research", "Publications", "Awards & Honours", "Academic Services", "Affiliations", "Posts"].map(item => ({
  name: item,
  key: kebabCase(item),
}))

const Content: React.FunctionComponent<Props> = ({ screenSize }: Props) => {
  let showArrows, slidesShown
  if (screenSize === "mobile") {
    showArrows = false
    slidesShown = 1
  } else if (screenSize === "tablet") {
    showArrows = false
    slidesShown = 2
  } else {
    showArrows = true
    slidesShown = 3
  }

  return (
    <div>
      <Segment inverted vertical as={Element} name={kebabCase("About")} basic>
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
                  My research interest focuses on building interactive
                  applications that promote physical health, including exertion-based games, physical activity
                  promotion at work, and mobile-based health intervention. Throughout my studies, I have had a
                  variety of expertise: front-/back-end development, hardware prototyping, machine learning, and
                  statistical analysis.
                </p>
                <p>
                  If you're interested in working with me, please contact:
                </p>
              </div>
            }
            imagePath={require("../../images/about.jpg")}
          />
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={kebabCase("Research")} basic>
        <Container>
          <Header as={"h1"} content={"RESEARCH PROJECTS"} textAlign={"left"}/>
          <ResearchPreview slidesShown={slidesShown} showArrows={showArrows}/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={kebabCase("Publications")} basic>
        <Container>
          <Header as={"h1"} content={"PUBLICATIONS"} textAlign={"left"}/>
          <Publications/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={kebabCase("Awards & Honours")} basic>
        <Container>
          <Header as={"h1"} content={"AWARDS & HONOURS"} textAlign={"left"}/>
          <Awards/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={kebabCase("Academic Services")} basic>
        <Container>
          <Header as={"h1"} content={"ACADEMIC SERVICES"} textAlign={"left"}/>
          <AcademicServices/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} as={Element} name={kebabCase("Affiliations")} basic>
        <Container>
          <Header as={"h1"} content={"AFFILIATIONS"} textAlign={"left"}/>
          <Affiliations/>
        </Container>
      </Segment>

      <Segment vertical padded={"very"} style={{ minHeight: 1000 }} as={Element} name={kebabCase("Posts")} basic>
        <Container>
          <Header as={"h1"} textAlign={"left"} content={"RECENT POSTS"}/>
          <BlogPreview/>
        </Container>
      </Segment>
    </div>
  )
}

const ResponsiveContent: React.FunctionComponent<Props> = ({ screenSize }: Props) => {
  const content = <Content screenSize={screenSize}/>
  return (
    screenSize === "computer" ?
      <DesktopContainer menuItems={menuItems} children={content}/> :
      <MobileContainer menuItems={menuItems} children={content}/>
  )
}

export default withScreenSize(ResponsiveContent)

interface Props {
  screenSize?: ScreenSize
}