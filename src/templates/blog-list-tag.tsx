import * as React from 'react'
import { Container, Grid, Header } from "semantic-ui-react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import BlogCategories from "../components/blog-categories"
import BlogTags from "../components/blog-tags"
import BlogList from "../components/blog-list"
import BlogPagination from "../components/blog-pagination"
import { MarkdownRemarkNodeType } from "../types"
import { formatPagePath } from "../utils"

export default (props ) => {
  const { data, pageContext } : Props = props
  return (
    <Layout>
      <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={10}>
              <Header as={'h1'}>
                Posts tagged with "{pageContext.param}"
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <BlogCategories/>
            </Grid.Column>
            <Grid.Column width={10}>
              <BlogList isAlias={false} items={data.posts.edges}/>
            </Grid.Column>
            <Grid.Column width={3}>
              <BlogTags/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={10} textAlign={"center"}>
              <BlogPagination totalPages={pageContext.totalPage}
                              activePage={pageContext.currentPage}
                              onPageChange={ page => { navigate(formatPagePath(page - 1, 'tag', pageContext.param))} }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query listBlogPostsByTag($skip: Int!, $limit: Int!, $param: String!) {
    posts: allMarkdownRemark(
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          tags: {
            eq: $param
          }
        }
      }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug {
              origin
            }
            category {
              name
              slug
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }`

interface PageContext {
  currentPage: number
  totalPage: number
  limit: number
  skip: number
  param: string
}

interface QueryResult {
  posts: {
    edges: Array<MarkdownRemarkNodeType>
  }
}

interface Props {
  data: QueryResult
  pageContext: PageContext
}