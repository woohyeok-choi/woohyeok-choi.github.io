import * as React from "react"
import SEO from "../components/common/seo"
import Layout from "../components/layout"
import Main from "../components/main/main"

export default () => (
  <Layout>
    <SEO title={'Main'}
         keywords={[
           'Human-computer interaction',
           'Exertion game',
           'Mobile health',
           'Health intervention',
           'Behavior change'
         ]}
         description={`Choi, Woohyeok's personal website presenting his research areas and achievements`}/>
    <Main/>
  </Layout>
)

