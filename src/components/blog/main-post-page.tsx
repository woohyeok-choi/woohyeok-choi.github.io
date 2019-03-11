import * as React from "react"
import { MarkdownRemarkNodeType } from "../../types"
import { Label, Header, Segment, Grid } from "semantic-ui-react"
import BlogContainer from './container'
import { formatReadableDate } from '../../utils'
import LinkedSpan from "../common/linked-span"

export default ( { data, prevPost, nextPost } : Props) => {
  const { node } = data
  const { frontmatter, html, fields } = node
  const { title, date } = frontmatter
  const { category, tags } = fields

  return (
    <BlogContainer>
      <Header as={'h1'} dividing>
        <Header.Subheader>
          Category: <a href={category.slug} target={'_blank'}>
            <LinkedSpan inverted={false} children={category.name}/>
          </a>
        </Header.Subheader>
        {title}
        <Header.Subheader>
          { formatReadableDate(date) }
        </Header.Subheader>
      </Header>
      <Segment vertical padded basic>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </Segment>
      { tags &&
      <Segment vertical padded={'very'}>
        <span style={{fontSize: '16px', fontWeight: 'bold', fontStyle: 'italic'}}>Tagged with </span>
        <Label.Group style={{display: 'inline'}}>
          { tags.map(tag => <Label key={tag.name} href={tag.slug} content={tag.name}/>) }
        </Label.Group>
      </Segment>
      }
      <Grid columns={2} as={Segment} vertical stackable>
        <Grid.Column textAlign={'left'}>
          { prevPost &&
            <Header as={'h3'}>
              Previous post
              <Header.Subheader style={{fontSize: '16px'}}>
                <a href={prevPost.slug}>
                  <LinkedSpan inverted={false} children={prevPost.title}/>
                </a>
              </Header.Subheader>
            </Header>
          }
        </Grid.Column>
        <Grid.Column textAlign={'right'}>
            { nextPost &&
              <Header as={'h3'}>
                Next post
                <Header.Subheader style={{fontSize: '16px'}}>
                  <a href={nextPost.slug}>
                    <LinkedSpan inverted={false} children={nextPost.title}/>
                  </a>
                </Header.Subheader>
              </Header>
            }
        </Grid.Column>
      </Grid>
    </BlogContainer>
  )
}

interface Props {
  data: MarkdownRemarkNodeType
  prevPost?: {
    title?: string
    slug?: string
  }
  nextPost?: {
    title?: string
    slug?: string
  }
}