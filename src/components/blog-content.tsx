import * as React from "react"
import { MarkdownRemarkNodeType } from "../types"
import { Label, Item, Header, Segment } from "semantic-ui-react"
import BlogContainer from './blog-container'
import { formatReadableDate } from '../utils'
import LinkedSpan from "./linked-span"

export default ( { data, isAlias = false, prevPost, nextPost } : Props) => {
  const { node } = data
  const { frontmatter, html, fields } = node
  const { title, date } = frontmatter
  const { category } = fields

  return (
    <div>
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
        <Segment vertical padded>
          <div dangerouslySetInnerHTML={{__html: html}}/>
        </Segment>
      </BlogContainer>
    </div>
  )
}

interface Props {
  data: MarkdownRemarkNodeType
  isAlias?: boolean
  prevPost?: {
    title: string
    slug: string
  }
  nextPost?: {
    title: string
    slug: string
  }
}