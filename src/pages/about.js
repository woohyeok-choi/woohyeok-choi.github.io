import React from "react"
import { graphql } from "gatsby"
import Layout2 from "../components/layout2"

export default ({ data }) => (
  <Layout2>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout2>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`