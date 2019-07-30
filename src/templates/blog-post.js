import React from "react"
<<<<<<< HEAD
import { graphql } from "gatsby"



=======
import { Link, graphql } from "gatsby"



import Bio from "../components/bio"
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import '../components/css/title.css'

class BlogPostTemplate extends React.Component {
  render() {
<<<<<<< HEAD
    const { data } = this.props
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { author } = data.site.siteMetadata
    
=======
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1 className="post-title"
          style={{
            marginTop: rhythm(2),
            marginBottom: '3%',
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            paddingBottom: '30px',
            borderBottom: '2px solid #a6a6a6'
          }}
        >
          {post.frontmatter.date + ' by ' + author}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
