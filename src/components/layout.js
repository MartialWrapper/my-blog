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


import Pic from '../../content/assets/pic.jpg'

import { rhythm, scale } from "../utils/typography"



class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="Title"
          style={{
            ...scale(1),
            color: 'white',
            marginRight: 'auto',
            marginLeft: 'auto',
            fontWeight: 'lighter',
            paddingBottom: rhythm(0.5),
            textAlign: 'center',
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
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="Title"
        style={{
          ...scale(1),
          color: 'white',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingBottom: rhythm(1.5),
          textAlign: 'center',
        }}
        >
          <Link className="Title"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
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
        <img className="ProfilePic" alt="A guy" src={Pic} />
        <div className="ResponsiveWrapper">
          
          <ul style={{listStyle: 'none'}}>
            <li><span style={{fontWeight: '900'}}>Status: </span> In love ...
            <b> with someone <span role="img" aria-label="xd">🖤</span></b></li>
            <li><span style={{fontWeight: '900'}}>Gender: </span> Male</li>
            <li><span style={{fontWeight: '900'}}>Role: </span> <span className="Underline" style={{color: 'white'}}>Frontend Developer</span></li>
            <li><span style={{fontWeight: '900'}}>Objective: </span> Find an inclusive workplace</li>
          </ul>
          <ul>
          </ul>
        </div>
        <div className="FooterWrapper">
        <footer className="Footer">
          powered with <span role="img" aria-label="xd">💖</span> by
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
        </div>
        </header>
        
        <main className="Main">{children}</main>
        </div>
        
        </div>
      
    )
  }
}

export default Layout
