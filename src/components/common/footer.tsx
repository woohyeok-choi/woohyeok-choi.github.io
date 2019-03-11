import * as React from "react"
import { Container, Segment } from "semantic-ui-react"
import LinkedSpan from "./linked-span"

export default () => (
  <Segment inverted padded vertical textAlign={"center"}>
    <Container>
      <p>
        Made by Choi, Woohyeok (woohyeok.choi (at) kaist.ac.kr) &copy; 2019; built with <a
        href="https://www.gatsbyjs.org" target={"_blank"}><LinkedSpan inverted={true} children={'Gatsby'}/></a>
      </p>
    </Container>
  </Segment>
)