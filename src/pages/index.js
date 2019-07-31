import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './../components/css/title.css'
import './../components/css/lethigh.css'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <Bio />
        <h1 className="Title" style={{color: 'black', maxWidth: '50%', fontSize: '1px', textAlign: 'left'}}><span className="Span-One">PROJECTS</span></h1>
        <div className="Posts-Wrapper">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
          <Link className="Post" style={{ boxShadow: `none`, color: 'black'}} to={node.fields.slug}>
            <div style={{marginBottom: '3%', color: 'black', paddingTop: '0%'}} key={node.fields.slug}>
              <h3
                style={{
                  fontFamily: 'Arial,Helvetica,sans-serif',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                }}
              >
                
                  {title}

              </h3>
              <small style={{fontSize: '10px', textTransform: 'uppercase'}}>{node.frontmatter.date} </small>
              <p style={{marginTop: '1em', overflow: 'hidden', fontSize: '12px', textTransform: 'uppercase'}}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              
            </div>
          </Link>
            
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
