import * as React from "react"
import Layout from "../components/layout"
import BlogCategories from "../components/blog-categories"
import BlogTags from "../components/blog-tags"
import BlogRecentPosts from "../components/blog-recent-posts"
import { Container, Grid, Segment } from "semantic-ui-react"

export default () => {
  return (
    <Layout>
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Segment>
              <BlogCategories/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            MAIN
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <BlogTags/>
            </Segment>
            <Segment>
            <BlogRecentPosts/>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  )
}