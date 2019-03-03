import * as React from "react"
import { Button, Card, Label } from "semantic-ui-react"
import { BlogItemData } from "../props"
import { graphql, StaticQuery } from "gatsby"
import Carousel from "nuka-carousel"

const BlogPreview: React.FunctionComponent<Props> = ({showControl, nShow = 1, items}) => (
  <Carousel
    slidesToShow={nShow}
    cellAlign={'center'}
    renderCenterLeftControls={ ({ previousSlide }) => {
      if (showControl) {
        return (
          <Button circular={true} icon={'angle left'} onClick={previousSlide}/>
        )
      } else {
        return ( undefined )
      }
    }}
    renderCenterRightControls={ ({ nextSlide }) => {
      if (showControl) {
        return (
          <Button circular={true} icon={'angle right'} onClick={nextSlide}/>
        )
      } else {
        return (
          undefined
        )
      }
    }}
    renderBottomCenterControls={() => <div/>}
  >
    {
      items.map(item => (
        <div style={{padding: 10}}>
          <BlogPreviewItem data={item}/>
        </div>
      ))
    }
  </Carousel>
)

const BlogPreviewItem: React.FunctionComponent<ItemProps> = ({ data }) => {
  const { id, datetime, title, slug, description, category, tags} = data

  return (
    <Card key={id}>
      <Card.Content>
        <Card.Header as={"a"} href={slug}>{title}</Card.Header>
        <Card.Meta>{datetime}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          Category: <a href={category.slug}>{category.name}</a>
        </p>
        <p>
          {tags &&
          <Label.Group>
            {tags.map(tag => <Label size={"mini"} as='a' href={tag.slug}>{tag.name}</Label>)}
          </Label.Group>
          }
        </p>
      </Card.Content>
    </Card>
  )
}

interface DefaultProps {
  nShow?: number
  showControl: boolean
}

interface Props extends DefaultProps {
  items: Array<BlogItemData>
}

interface ItemProps {
  data: BlogItemData
}

interface QueryResult {
  data: {
    posts: {
      edges: Array<{
        node: {
          id: string
          frontmatter: {
            title?: string
            datetime: string
          }
          excerpt?: string
          fields: {
            postSlug: string
            categorySlug: {
              name: string
              slug: string
            }
            tagsSlug: Array<{
              name: string
              slug: string
            }>
          }
        }
      }>
    }
  }
}

export default (props: DefaultProps) => (
  <StaticQuery query={graphql`
    query {
      posts: allMarkdownRemark(
        sort: {
          fields: frontmatter___datetime
          order: DESC
        }
        filter: {
          frontmatter: {
            category: {
              nin: ["research", "Research"]
            }
          }
        }
        limit: 5
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              datetime
            }
            excerpt
            fields {
              postSlug
              categorySlug {
                name
                slug
              }
              tagsSlug {
                name
                slug
              }
            }
          }
        }
      }
    }`
  } render={(result: QueryResult) =>
    <BlogPreview items={result.data.posts.edges.map(
      ({ node }) => ({
        id: node.id,
        datetime: node.frontmatter.datetime,
        title: node.frontmatter.title,
        description: node.excerpt,
        path: node.fields.postSlug,
        category: {
          name: node.fields.categorySlug.name,
          path: node.fields.categorySlug.slug,
        },
        tags: node.fields.tagsSlug.map(item => ({ name: item.name, path: item.slug })),
      }),
    )} {...props}/>
  }/>
)
