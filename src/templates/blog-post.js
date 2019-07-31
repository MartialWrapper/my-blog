import React from "react"
import { graphql } from "gatsby"



import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import '../components/css/title.css'

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { author } = data.site.siteMetadata
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1 className="Title"
          style={{
            marginTop: rhythm(2),
            marginBottom: '3%',
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            fontSize: '10px',
            paddingBottom: '2%',
            borderBottom: '1px solid black'
          }}
        >
          {post.frontmatter.date + ' by ' + author}
        </p>
        <div style={{textTransform: 'uppercase', fontSize: '11px'}}dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
