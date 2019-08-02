import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"


import './css/body.css'
import './css/title.css'
import './css/footer.css'
import './css/header.css'
import './css/main.css'
import './css/noob.css'
import './css/footerwrapper.css'
import './css/underline.css'
import './css/responsivewrapper.css'
import './css/innerwrapper.css'

import pdf from './updated_cv.pdf'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="Title2"
          style={{
            color: 'black',
            paddingRight: '10%',
            marginLeft: '5%',
          }}
        >
          <Link
            className='Title2'
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
           <div className="line_height-wrapper"><span style={{fontWeight: '900'}}>Alex.</span><br/><small style={{fontSize: '10px'}}><span style={{fontSize: '12px', fontWeight: '600'}}>developer</span> by morning ... </small><br/><small style={{fontSize: '10px'}}>... human by night.</small></div>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="Title2"
        style={{
          color: 'black',
          marginRight: '10%',
          marginLeft: '10%',
          textAlign: 'right',
        }}
      >
        <Link
          className='Title2'
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
           <div className="line_height-wrapper"><span style={{fontWeight: '900'}}>Alex.</span><br/><small style={{fontSize: '10px'}}><span style={{fontSize: '12px', fontWeight: '600'}}>developer</span> by morning ... </small><br/><small style={{fontSize: '10px'}}>... human by night.</small></div>
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          minWidth: '100%',
          maxWidth: '100%',
        }}
      >
        <div className="Noob">
        <header className="Header">
        <div className="Inner-Wrapper">
        {header}
        <div className="ResponsiveWrapper">
          <ul className="List" style={{listStyle: 'none'}}>
            <StaticQuery
            query={
              graphql`
              query LayoutQuery {
                site {
                  siteMetadata {
                    title
                    author
                    social {
                      github
                      linkedin
                      email
                    }
                  }
                }
              }
            `}
            render={data => (
              <div className="Inner_Wrapperr" >
                <li><a href={pdf} target="_blank" style={{color: 'black'}}>Resumé.</a></li>
                <li><a href={data.site.siteMetadata.social.email} style={{color: 'black'}}>E-mail.</a></li>
                <li><a href={data.site.siteMetadata.social.linkedin} style={{color: 'black'}}>LinkedIN.</a></li>
                <li><a href={data.site.siteMetadata.social.github} style={{color: 'black'}}>Github.</a></li>
              </div>
            )}
            />
          </ul>
        </div>
        </div>
        </header>

        <main className="Main">
        {children}        
        <footer className="Footer">
          2019 &copy; ALL RIGHTS RESERVED
        </footer>
        </main>
        </div>
        </div>
    )
  }
}

export default Layout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        social {
          github
          linkedin
          email
        }
      }
    }
  }
`
