import React from "react"
import { Link } from "gatsby"

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


class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="Title"
          style={{
            color: 'black',
            marginRight: '10%',
            marginLeft: '10%',
            textAlign: 'right',
          }}
        >
          <Link
            className='Title'
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            <span style={{fontWeight: '900'}}>Alex.</span> <br/> <small style={{fontSize: '9px'}}><span style={{fontSize: '12px', fontWeight: '600'}}>web developer</span> by morning ... </small> <br/> <small style={{fontSize: '9px'}}>... human by night.</small>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="Title"
        style={{
          color: 'black',
          marginRight: '10%',
          marginLeft: '10%',
          textAlign: 'left',
        }}
      >
        <Link
          className='Title'
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
            <span style={{fontWeight: '900'}}>Alex.</span> <br/> <small style={{fontSize: '9px'}}><span style={{fontSize: '12px', fontWeight: '600'}}>web developer</span> by morning ... </small> <br/> <small style={{fontSize: '9px'}}>... human by night.</small>
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
            <li><a href="/" style={{color: 'black'}}>Resumé</a></li>
            <li><a href="/" style={{color: 'black'}}>E-mail</a></li>
            <li><a href="/" style={{color: 'black'}}>LinkedIN</a></li>
            <li><a href="/" style={{color: 'black'}}>Github</a></li>
          </ul>
        </div>
        
        <div className="FooterWrapper">

        </div>
        </div>
        </header>
        
        <main className="Main">{children}</main>
        </div>
        <footer className="Footer">
          powered with {'<3'} by
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
    )
  }
}

export default Layout
