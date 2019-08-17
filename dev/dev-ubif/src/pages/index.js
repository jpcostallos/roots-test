import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogs from "../components/blogs"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Blogs></Blogs>

  </Layout>
)

export default IndexPage
