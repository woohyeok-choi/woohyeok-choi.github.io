import * as React from "react"
import { Item } from "semantic-ui-react"
import { PublicationType } from "../types"
import { graphql, useStaticQuery } from "gatsby"
import { ReactNode } from "react"
import LinkedSpan from "./linked-span"

const Publications: React.FunctionComponent<Props> = ({
  items
}) => {
  return (
    <Item.Group divided>
      {
        items.map(item => <PublicationItem data={item} key={item.id}/>)
      }
    </Item.Group>
  )
}

const PublicationItem: React.FunctionComponent<ItemProps> = ({
  data
}) => {
  const {
    id, type, title, authors, publisher, abbrev, year, volume, issue, pages, doi,
    bibtexFile, paperFile, posterFile, slideFile, videoFile, appendixFile, videoLink, github } = data
  let extra = ''
  if (volume) extra += `, ${volume}`
  if (issue) extra += ` (No. ${issue})`
  if (pages) extra += `, ${pages}`

  const links = []

  if (bibtexFile && bibtexFile.name !== 'dummy' && bibtexFile.publicURL) links.push({name: 'BIBTEX', link: bibtexFile.publicURL})
  if (paperFile && paperFile.name !== 'dummy' && paperFile.publicURL) links.push({name: 'PAPER', link: paperFile.publicURL})
  if (posterFile && posterFile.name !== 'dummy' && posterFile.publicURL) links.push({name: 'POSTER', link: posterFile.publicURL})
  if (appendixFile && appendixFile.name !== 'dummy' && appendixFile.publicURL) links.push({name: 'APPENDIX', link: appendixFile.publicURL})
  if (slideFile && slideFile.name !== 'dummy' && slideFile.publicURL) links.push({name: 'SLIDES', link: slideFile.publicURL})
  if (videoFile && videoFile.name !== 'dummy' && videoFile.publicURL) links.push({name: 'VIDEO', link: videoFile.publicURL})
  if (videoLink) links.push({name: 'VIDEO', link: videoLink})
  if (github) links.push({name: 'GITHUB', link: github})

  return (
    <Item>
      <Item.Content>
        <Item.Extra style={{
          margin: '0 0 .3em',
          color: 'rgba(0,0,0,.6)',
          fontWeight: 'bold'
        }}>
          {type}
        </Item.Extra>
        <Item.Header>
          {title}
        </Item.Header>
        <Item.Meta>
          {year}. {publisher} {abbrev && `(${abbrev})`}{extra}
        </Item.Meta>
        <Item.Description>
          {authors}
        </Item.Description>
        <Item.Extra>
          {doi && <p>DOI: <a href={`https://doi.org/${doi}`} target={'_blank'}><LinkedSpan children={doi} inverted={false}/></a></p>}
          <p>
            {
              links.map( ({name, link}) => <a key={link} href={link} target={'_blank'}><LinkedSpan inverted={false} children={name}/></a>).reduce((acc: Array<ReactNode>, cur: ReactNode) => {
                return acc === null ? [cur] : [...acc, " | " , cur]
              }, null)
            }
          </p>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

interface Props {
  items: Array<PublicationType>
}

interface ItemProps {
  data: PublicationType
}

interface QueryResult {
  publications: {
    edges: Array<{
      node: PublicationType
    }>
  }
}

export default () => {
  const { publications } : QueryResult = useStaticQuery(graphql`
    query {
      publications: allAchievementXlsxPublications (
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
            paperFile {
              name
              publicURL
            }
            posterFile {
              name
              publicURL
            }
            slideFile {
              name
              publicURL
            }
            videoFile {
              name
              publicURL
            }
            appendixFile {
              name
              publicURL
            }
            videoLink
            bibtexFile {
              name
              publicURL
            }
            github
          }
        }
      }
    }`
  )
  return (
    <Publications items={publications.edges.map(({ node }) => node)}/>
  )
}
