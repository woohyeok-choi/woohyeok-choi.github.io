import * as React from "react"
import { Card, Image, Placeholder } from "semantic-ui-react"
import { MarkdownRemarkNodeType } from "../../../types"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "../../common/carousel"

const ResearchPreviewItem: React.FunctionComponent<ItemProps> = ({data}) => {
  const { node } = data
  const { frontmatter, fields} = node
  const { title, description, preview } = frontmatter
  const { slug } = fields

  return (
    <Card style={{width: '100%'}} as={'a'} href={slug}>
      {preview ? <Image src={preview.childImageSharp.resize.src} style={{marginBottom: 0}}/> :
        <Placeholder>
          <Placeholder.Image rectangular/>
        </Placeholder>
      }
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        { description &&
        <Card.Description>
          {description}
        </Card.Description>
        }
      </Card.Content>
    </Card>
  )
}

export default ({slidesShown, showArrows} : Props) => {
  const { research } : QueryResult = useStaticQuery(graphql`
    query {
      research: allMarkdownRemark(
        sort: {
          fields: frontmatter___date
          order: DESC
        }
        filter: {
          frontmatter: {
            category: {
              in: ["research", "Research"]
            }
          }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              preview {
                childImageSharp {
                  resize(height: 300, width: 400, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
            fields {
              slug
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
  )
  return (
    <Carousel
      slidesShown={slidesShown}
      showArrows={showArrows}
      items={research.edges.map(item => <ResearchPreviewItem key={item.node.id} data={item}/>)}
    />
  )
}

interface Props {
  showArrows: boolean
  slidesShown: number
}

interface ItemProps {
  data: MarkdownRemarkNodeType
}

interface QueryResult {
  research: {
    edges: Array<MarkdownRemarkNodeType>
  }
}
