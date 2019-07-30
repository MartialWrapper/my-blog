import React from "react"
import { Link } from "gatsby"

<<<<<<< HEAD

=======
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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



<<<<<<< HEAD
=======


>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
<<<<<<< HEAD
        <h1 className="Title"
          style={{
            ...scale(1),
            color: 'white',
            marginRight: 'auto',
            marginLeft: 'auto',
            fontWeight: 'lighter',
            paddingBottom: rhythm(0.5),
=======
        <h1
          style={{
            ...scale(1),
            marginRight: 'auto',
            marginLeft: 'auto',
            paddingBottom: rhythm(1.5),
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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
<<<<<<< HEAD
          color: 'white',
=======
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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
<<<<<<< HEAD
        <img className="ProfilePic" alt="A guy" src={Pic} />
=======
        <img alt="A guy" src={Pic} />
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
        <div className="ResponsiveWrapper">
          
          <ul style={{listStyle: 'none'}}>
            <li><span style={{fontWeight: '900'}}>Status: </span> In love ...
            <b> with someone <span role="img" aria-label="xd">🖤</span></b></li>
            <li><span style={{fontWeight: '900'}}>Gender: </span> Male</li>
            <li><span style={{fontWeight: '900'}}>Role: </span> <span className="Underline" style={{color: 'white'}}>Frontend Developer</span></li>
<<<<<<< HEAD
            <li><span style={{fontWeight: '900'}}>Objective: </span> Find an inclusive workplace</li>
          </ul>
          <ul>
=======
            <li><span style={{fontWeight: '900'}}>Objective: </span> Find a good job</li>
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
          </ul>
        </div>
        <div className="FooterWrapper">
        <footer className="Footer">
<<<<<<< HEAD
          powered with <span role="img" aria-label="xd">💖</span> by
=======
          this blog is powered mainly by
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
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
