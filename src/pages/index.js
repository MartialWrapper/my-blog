import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import './../components/css/title.css'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { author } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <Bio />
        <h1 className="Title" style={{paddingLeft: '1%', maxWidth: '50%', fontSize: '20px', color: 'black', textAlign: 'left'}}>BLOG ENTRIES</h1>
        <div className="Posts-Wrapper">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="Post" style={{marginBottom: '3%', color: 'black', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', padding: '3%'}} key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  marginTop: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none`, color: 'black', fontSize: '30px' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>By {author}, on {node.frontmatter.date} </small>
              <p style={{marginTop: '1em', overflow: 'hidden'}}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              
            </div>
           
            
          )
        })}
        </div> 
        
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
