import Layout from "../../components/common/layout"
import BlogAllTags from "../../components/blog/main-tags"
import * as React from "react"
import SEO from "../../components/common/seo"

export default () => {
  return (
    <Layout>
      <SEO title={'All tags'}
           description={`List of tags used in Choi, Woohyeok's personal blog`}/>
      <BlogAllTags/>
    </Layout>
  )
}