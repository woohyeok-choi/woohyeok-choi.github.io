import * as React from "react"
import { Item } from "semantic-ui-react"
import { PublicationData } from "../props"
import { graphql, useStaticQuery } from "gatsby"

const Publications: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <Item.Group divided>
      {
        items.map(item => <PublicationItem data={item}/>)
      }
    </Item.Group>
  )
}

const PublicationItem: React.FunctionComponent<ItemProps> = ({
  data
}) => {
  const { id, title, authors, publisher, abbrev, year, volume, issue, pages, doi, acm, paper, slide, video, github } = data
  let extra = ''
  if (volume) extra += `, ${volume}`
  if (issue) extra += ` (No. ${issue})`
  if (pages) extra += `, ${pages}`

  return (
    <Item key={id}>
      <Item.Content>
        <Item.Header>
          {title}
        </Item.Header>
        <Item.Meta>
          {year}. {publisher} ({abbrev}){extra}
        </Item.Meta>
        <Item.Description>
          {authors}
        </Item.Description>
        <Item.Extra>
          {doi && <p>{doi}</p>}
          <span>
            {acm && <a href={acm} target={'_blank'}>ACM DL</a>}
            {paper && <a href={paper} target={'_blank'}>PAPER</a>}
            {slide && <a href={slide} target={'_blank'}>SLIDES</a>}
            {video && <a href={video} target={'_blank'}>VIDEO</a>}
            {github && <a href={github} target={'_blank'}>GITHUB</a>}
          </span>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

interface Props {
  items: Array<PublicationData>
}

interface ItemProps {
  data: PublicationData
}

interface QueryResult {
  data: {
    publications: {
      edges: Array<{
        node: PublicationData
      }>
    }
  }
}

export default () => {
  const { data } : QueryResult = useStaticQuery(graphql`
    query {
      publications: allPublicationsCsv(
        sort: {
          fields: date
          order: DESC
        }
      ) {
        edges {
          node {
            id
            type
            title
            authors
            publisher
            abbrev
            year
            volume
            issue
            pages
            doi
            acm
            paper
            slide
            video
            github
          }
        }
      }
    }`
  )
  return (
    <Publications items={data.publications.edges.map(({ node }) => node)}/>
  )
}
