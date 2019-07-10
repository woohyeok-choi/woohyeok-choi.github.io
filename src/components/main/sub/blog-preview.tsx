import * as React from "react"
import { Card, Item } from "semantic-ui-react"
import { MarkdownRemarkNodeType } from "../../../types"
import { graphql, useStaticQuery } from "gatsby"
import { formatReadableDate } from '../../../utils'

class BlogSeeMoreItem extends React.Component<{}, SeeMoreState> {
  state: SeeMoreState = {
    isHover: false
  }

  onMouseEnter = () => {
    this.setState({isHover: true})
  }

  onMouseExit = () => {
    this.setState({isHover: false})
  }

  render(): React.ReactNode {
    const { isHover } = this.state
    const backgroundColor = isHover ? 'rgba(27, 28, 29, 1)' : '#fff'
    const color = isHover ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.85)'
    return (
      <Card key={'see-more'}
            href={'./blog'}
            style={{width: '100%', backgroundColor}}
            onMouseEnter ={this.onMouseEnter}
            onMouseLeave={this.onMouseExit}
      >
        <Card.Content>
          <Card.Header textAlign={'center'} style={{color}}>
            Read all posts
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}


class BlogPreviewItem extends React.Component<ItemProps> {

  render(): React.ReactNode {
    const { data } = this.props
    const { node } = data
    const { id, frontmatter, fields, excerpt } = node
    const { title, date, preview } = frontmatter
    const { slug } = fields

    return (
      <Card key={id} as={'a'} style={{width: '100%'}} href={slug}>
        <Card.Content>
          <Item.Group>
          <Item>
            {
              preview && <Item.Image size={'small'} src={preview.childImageSharp.resize.src}/>
            }
            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <Item.Meta>{formatReadableDate(date)}</Item.Meta>
              <Item.Description>{excerpt}</Item.Description>
            </Item.Content>
          </Item>
          </Item.Group>
        </Card.Content>
      </Card>
    )
  }
}


interface SeeMoreState {
  isHover: boolean
}

interface ItemProps {
  data: MarkdownRemarkNodeType
}

interface QueryResult {
  posts: {
    edges: Array<MarkdownRemarkNodeType>
  }
}

export default () => {
  const { posts } : QueryResult = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        sort: {
          fields: frontmatter___date
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
              date
              preview {
                childImageSharp {
                  resize(height: 150, width: 150, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
            excerpt(pruneLength: 750)
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
    <Card.Group>
      {
        [...posts.edges.map(item => <BlogPreviewItem data={item}/>), <BlogSeeMoreItem/>]
      }
    </Card.Group>
  )
}