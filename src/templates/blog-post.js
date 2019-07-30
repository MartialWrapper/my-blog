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
<<<<<<< HEAD
        <h1 className="post-title"
=======
        <h1
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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
<<<<<<< HEAD
            paddingBottom: '30px',
            borderBottom: '2px solid #a6a6a6'
          }}
        >
          {post.frontmatter.date + ' by ' + author}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
=======
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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
