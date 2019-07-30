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
<<<<<<< HEAD
        <p>Look, I don't know why are you right here, maybe you did put the wrong direction at the browser's navigation bar, but whatever. Go back then!</p>
        <p><b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 <b>404</b> 404 [...]</p>
=======
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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
