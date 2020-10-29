import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'

// import * as S from '../../styles/404/styled'

class NotFoundPage extends React.Component {
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title

    return (
      <Layout>
        <div>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
