import React from "react"

/* Components */
import Layout from '../components/Layout'

const Home = () => (
  <Layout title={siteTitle}
          location={location}> <SEO
      title="Blog"
      keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
  />
  <div>Gatsby and defaults setup, Let's start making it beautify</div>
  </Layout>
)
export default Home
