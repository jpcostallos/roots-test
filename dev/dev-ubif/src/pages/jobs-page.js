import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jobs from "../components/jobs"

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs Page" />
    <Jobs></Jobs>
  </Layout>
)

export default JobsPage
