import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <p>Look, I don't know why are you right here, maybe you did put the wrong direction at the browser's navigation bar, but whatever. Go back then!</p>
        <p><b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 [...]</p>
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
