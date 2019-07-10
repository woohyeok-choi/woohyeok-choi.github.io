import * as React from "react"
import { MarkdownRemarkNodeType } from "../../types"
import { Label, Header, Segment, Grid } from "semantic-ui-react"
import { MobileContainer, DesktopContainer } from "./container"
import { formatReadableDate } from "../../utils"
import LinkedSpan from "../common/linked-span"
import { graphql, useStaticQuery } from "gatsby"
import { ScreenSize, withScreenSize } from "../common/with-screen-size"
import { DiscussionEmbed } from "disqus-react"

const Content: React.FunctionComponent<DefaultProps> = ({ data, prevPost, nextPost, address }: DefaultProps) => {
  const { node } = data
  const { id, frontmatter, html, fields } = node
  const { title, date } = frontmatter
  const { category, tags } = fields
  const { site }: QueryResult = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          disqusShortname
        }
      }
    }
  `)
  return (
    <div>
      <Header as={"h1"} dividing>
        <Header.Subheader>
          Category: <a href={category.slug}>
          <LinkedSpan inverted={false} children={category.name}/>
        </a>
        </Header.Subheader>
        {title}
        <Header.Subheader>
          {formatReadableDate(date)}
        </Header.Subheader>
      </Header>
      <Segment vertical padded basic>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </Segment>
      {tags &&
      <Segment vertical padded={"very"}>
        <span style={{ fontSize: "16px", fontWeight: "bold", fontStyle: "italic" }}>Tagged with </span>
        <Label.Group style={{ display: "inline" }}>
          {tags.map(({ name, slug }) => <Label key={name} href={slug} content={name}/>)}
        </Label.Group>
      </Segment>
      }
      {
        site.siteMetadata.disqusShortname &&
        <Segment vertical padded={"very"}>
          <DiscussionEmbed
            shortname={site.siteMetadata.disqusShortname}
            config={{
              title: title,
              identifier: id,
              url: address,
            }}
          />
        </Segment>
      }
      {
        (prevPost || nextPost) &&
        <Grid columns={2} as={Segment} vertical stackable padded>
          <Grid.Column textAlign={"left"}>
            {prevPost &&
            <Header as={"h3"}>
              Previous post
              <Header.Subheader style={{ fontSize: "16px" }}>
                <a href={prevPost.slug}>
                  <LinkedSpan inverted={false} children={prevPost.title}/>
                </a>
              </Header.Subheader>
            </Header>
            }
          </Grid.Column>
          <Grid.Column textAlign={"right"}>
            {nextPost &&
            <Header as={"h3"}>
              Next post
              <Header.Subheader style={{ fontSize: "16px" }}>
                <a href={nextPost.slug}>
                  <LinkedSpan inverted={false} children={nextPost.title}/>
                </a>
              </Header.Subheader>
            </Header>
            }
          </Grid.Column>
        </Grid>
      }
    </div>
  )
}

const ResponsiveContent: React.FunctionComponent<Props> = ({ data, prevPost, nextPost, address, screenSize }: Props) => {
  const content = <Content data={data} address={address} prevPost={prevPost} nextPost={nextPost}/>

  return (
    screenSize === "mobile" ?
      <MobileContainer children={content}/> :
      <DesktopContainer children={content}/>
  )
}

export default withScreenSize(ResponsiveContent)

interface QueryResult {
  site: {
    siteMetadata: {
      disqusShortname?: string
    }
  }
}

interface DefaultProps {
  data: MarkdownRemarkNodeType
  address: string
  prevPost?: {
    title?: string
    slug?: string
  }
  nextPost?: {
    title?: string
    slug?: string
  }
}

interface Props extends DefaultProps {
  screenSize?: ScreenSize
}