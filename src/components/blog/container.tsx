import * as React from "react"
import { Container, Grid, Header, Menu, Segment } from "semantic-ui-react"
import BlogCategories from "./sub/categories"
import BlogTags from "./sub/tags"
import BlogRecentPosts from "./sub/recent-posts"
import Footer from "../common/footer"
import LinkedSpan from "../common/linked-span"

const Content: React.FunctionComponent<Props> = ({ children }: Props) => (
  <Grid centered container stackable>
    <Grid.Column width={12}>
      {children}
    </Grid.Column>
    <Grid.Column width={4}>
      <Segment color={"grey"} vertical padded>
        <Header as={"h4"} content={"Categories"}/>
        <BlogCategories/>
      </Segment>
      <Segment color={"grey"} vertical padded>
        <Header as={"h4"}>
          Tags
          <Header.Subheader style={{ display: "inline", float: "right" }} as={"a"} href={"/blog/tags"}>
            <LinkedSpan inverted={false} children={"View all tags..."}/>
          </Header.Subheader>
        </Header>
        <BlogTags limit={10}/>
      </Segment>
      <Segment color={"grey"} vertical padded>
        <Header as={"h4"} content={"Recent Posts"}/>
        <BlogRecentPosts/>
      </Segment>
    </Grid.Column>
  </Grid>
)

const DesktopContainer: React.FunctionComponent<Props> = ({ children }: Props) =>
  (
    <div>
      <Menu secondary pointing fixed={"top"} inverted style={{ backgroundColor: "#1b1c1d" }}>
        <Container>
          <Menu.Item header
                     key={"header"}
                     content={"CHOI, WOOHYEOK's BLOG"}
                     href={"/blog"}
                     style={{ fontSize: "1.5em", lineHeight: "0.1em" }}
          />
          <Menu.Item key={"main"}
                     content={"Go to main page"}
                     position={"right"}
                     href={"/"}/>
        </Container>
      </Menu>
      <div style={{ paddingTop: "7.0em" }}>
        <Content children={children}/>
        <Footer/>
      </div>
    </div>
  )


const MobileContainer: React.FunctionComponent<Props> = ({ children }: Props) =>
  (
    <div>
      <Menu secondary pointing fixed={"top"} inverted style={{ backgroundColor: "#1b1c1d" }}>
        <Container>
          <Menu.Item key={"home"}
                     href={"/"}
                     icon={"home"}/>
          <Menu.Item key={"header"}
                     header
                     href={"/blog"}
                     content={"CHOI, WOOHYEOK's BLOG"}
                     position={"right"}
                     style={{ fontSize: "1.5em", lineHeight: "0.1em" }}/>
        </Container>
      </Menu>
      <div style={{ paddingTop: "7.0em" }}>
        <Content children={children}/>
        <Footer/>
      </div>
    </div>
  )

export {
  DesktopContainer, MobileContainer
}

interface Props {
  children?: React.ReactNode
}


