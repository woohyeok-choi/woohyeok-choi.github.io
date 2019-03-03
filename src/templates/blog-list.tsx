import * as React from 'react'
import { Container, Item, Label, Segment, Grid } from "semantic-ui-react"
import { graphql } from "gatsby"
import { BlogItemData } from "../props"
import Layout from "../components/layout"
import BlogCategories from "../components/blog-categories"
import BlogTags from "../components/blog-tags"
import BlogRecentPosts from "../components/blog-recent-posts"

const BlogList: React.FunctionComponent<Props> = ({data, pageContext}) => {
  const items: Array<BlogItemData> = data.blogPosts.edges.map(datum => {
    const { node } = datum
    return {
      id: node.id,
      frontmatter: node.frontmatter,
      link: node.fields.slug,
      excerpt: node.excerpt
    }
  })

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
            <Item.Group>
              {
                items.map(item =><BlogListItem data={item}/>)
              }
            </Item.Group>
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

const BlogListItem: React.FunctionComponent<ItemProps> = ({
  data
}) => {
  const { link, excerpt, frontmatter } = data
  const { title, datetime, category, tags } = frontmatter

  return (
    <Item>
      <Item.Content>
        <Item.Header as={'a'} href={link}>{title}</Item.Header>
        <Item.Meta>{datetime}</Item.Meta>
        <Item.Description>
          {excerpt}
        </Item.Description>
        <Item.Extra>
          <p>
            Category: {category}
          </p>
          <p>
            { tags &&
            <Label.Group>
              {tags.map(tag => <Label size={'mini'} as='a'>{tag}</Label>)}
            </Label.Group>
            }
          </p>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}
interface Props {
  pageContext: {
    currentPage: number,
    postsPerPage: number
  }
  data: {
    blogPosts: {
      edges: Array<{
        node: {
          id?: string
          fields: {
            slug?: string
          }
          frontmatter: {
            title: string
            datetime: string
            category?: string
            tags?: Array<string>
          }
          excerpt?: string
        }
      }>
    }
  }
}

interface ItemProps {
  data: BlogItemData
}

export const query = graphql`
  query listBlogPosts($skip: Int!, $limit: Int!) {
    blogPosts: allMarkdownRemark(
     sort: {
        fields: frontmatter___datetime
        order: DESC
      }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            category
            tags
            datetime
          }
          excerpt
        }
      }
    }
  }`

export default BlogList