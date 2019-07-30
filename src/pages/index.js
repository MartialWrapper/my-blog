import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import './../components/css/title.css'
<<<<<<< HEAD
import './../components/css/lethigh.css'
=======
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79

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
<<<<<<< HEAD
        <h1 className="Title" style={{color: 'black', maxWidth: '50%', fontSize: '20px', textAlign: 'left'}}><span className="Span-One">PROJECTS</span></h1>
=======
        <h1 className="Title" style={{paddingLeft: '1%', maxWidth: '50%', fontSize: '20px', color: 'black', textAlign: 'left'}}>BLOG ENTRIES</h1>
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
        <div className="Posts-Wrapper">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
<<<<<<< HEAD
          <Link className="Post" style={{ boxShadow: `none`, color: 'black'}} to={node.fields.slug}>
            <div style={{marginBottom: '3%', color: 'black', padding: '3%'}} key={node.fields.slug}>
              <h3
                style={{
                  fontFamily: 'Vollkorn',
=======
            <div className="Post" style={{marginBottom: '3%', color: 'black', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', padding: '3%'}} key={node.fields.slug}>
              <h3
                style={{
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
                  marginBottom: rhythm(1 / 4),
                  marginTop: rhythm(1 / 4),
                }}
              >
<<<<<<< HEAD
                
                  {title}

=======
                <Link style={{ boxShadow: `none`, color: 'black', fontSize: '30px' }} to={node.fields.slug}>
                  {title}
                </Link>
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
              </h3>
              <small>By {author}, on {node.frontmatter.date} </small>
              <p style={{marginTop: '1em', overflow: 'hidden'}}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              
            </div>
<<<<<<< HEAD
          </Link>
=======
           
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
            
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
