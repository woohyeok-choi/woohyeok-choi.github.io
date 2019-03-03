import * as React from "react"
import Carousel from 'nuka-carousel'
import { Button, Card, Image, Label, Placeholder } from "semantic-ui-react"
import { BlogItemData } from "../props"
import { graphql, StaticQuery } from "gatsby"

const ResearchPreview: React.FunctionComponent<Props> =  ({showControl, nShow = 1, items}) => (
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
          <ResearchPreviewItem data={item}/>
        </div>
      ))
    }
  </Carousel>
)

const ResearchPreviewItem: React.FunctionComponent<ItemProps> = ({
  data
}) => {
  const { id, title, slug, preview, description, category, tags} = data


  return (
    <Card key={id}>
      {preview ? <Image src={preview}/> :
        <Placeholder>
          <Placeholder.Image rectangular/>
        </Placeholder>
      }
      <Card.Content>
        <Card.Header as={'a'} href={slug}>{title}</Card.Header>
        { description &&
        <Card.Description>
          {description}
        </Card.Description>
        }
      </Card.Content>
      <Card.Content extra>
        <p>
          { tags &&
          <Label.Group>
            {tags.map(tag => <Label size={'mini'} as='a'>{tag}</Label>)}
          </Label.Group>
          }
        </p>
      </Card.Content>
    </Card>
  )
}

interface DefaultProps {
  showControl: boolean
  nShow?: number
}

interface Props extends DefaultProps {
  items: Array<BlogItemData>
}

interface ItemProps {
  data: BlogItemData
}

interface QueryResult {
  data: {
    research: {
      edges: Array<{
        node: {
          id: string
          frontmatter: {
            title?: string
            description?: string
            preview?: string
          }
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
      research: allMarkdownRemark(
        sort: {
          fields: frontmatter___datetime
          order: DESC
        }
        filter: {
          frontmatter: {
            category: {
              in: ["research", "ResearchPreview"]
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
              description
            }
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
  } render={ (result: QueryResult) =>
    <ResearchPreview items={result.data.research.edges.map(
      ({ node }) => ({
        id: node.id,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        preview: node.frontmatter.preview,
        path: node.fields.postSlug,
        category: {
          name: node.fields.categorySlug.name,
          path: node.fields.categorySlug.slug,
        },
        tags: node.fields.tagsSlug.map(item => ({ name: item.name, path: item.slug }))
      })
    )} {...props}/>
  }/>
)