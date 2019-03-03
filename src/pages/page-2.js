import React from "react"
import { Link } from "gatsby"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout2>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout2>
)

export default SecondPage
