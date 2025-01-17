import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ lang = 'en', keywords = [], title, description = ''}: Props) => {
  const { site } : QueryResult = useStaticQuery(graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }`)
  const { siteMetadata } = site

  const metaDescription = description || siteMetadata.description
  const defaultMetadata = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:site_name`,
      content: siteMetadata.title
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  return (
    <Helmet
      htmlAttribute={{
        lang
      }}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css'
        }
      ]}
      script={[
        {
          src: 'https://kit.fontawesome.com/51dd16170c.js',
          crossorigin: 'anonymous'
        }
      ]}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={
        defaultMetadata.concat(keywords.length ? { name: 'keywords', content: keywords.join(', ') } : [])
      }
    />
  )
}

interface Props {
  description?: string
  lang?: string
  keywords?: Array<string>
  title: string
}

interface QueryResult {
  site: {
    siteMetadata: {
      title?: string
      description?: string
      author?: string
    }
  }
}
