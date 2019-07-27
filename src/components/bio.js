import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import './css/text.css'
import './css/lethigh.css'


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <React.Fragment>
    <div
      style={{
        display: `flex`,
        marginBottom: '5%',
        flexDirection: 'column'
      }}
    >
      <h1 className="Title" style={{ maxWidth: '50%', fontSize: '20px', color: 'black', textAlign: 'left'}}>BIOGRAPHY</h1>
      <p className="Text">
        My name is <strong>{author}</strong>, aaand ... I'm from a little southern European country: Spain. <br /> I've been so interested in 'tech' since I was a little boy, and now I'm trying to become a self-taught developer, <span className="LetHigh">totally from scratch!</span> <br /> My current stack is: Javascript, ReactJS, Gatsby, GraphQL, and npm.
        {` `}
        <br></br>
        ( <a className="Text" href={`https://www.instagram.com/${social.instagram}`}>
          Follow me on Instagram!
        </a> )
      </p>
    </div>
    <div
      style={{
        display: `flex`,
        marginBottom: '5%',
        flexDirection: 'column'
      }}
    >
      <h1 className="Title" style={{ maxWidth: '50%', fontSize: '20px', color: 'black', textAlign: 'left'}}>BIOGRAPHY</h1>
      <p className="Text">
        My name is <strong>{author}</strong>, aaand ... I'm from a little southern European country: Spain. <br /> I've been so interested in 'tech' since I was a little boy, and now I'm trying to become a self-taught developer, <span className="LetHigh">totally from scratch!</span> <br /> My current stack is: Javascript, ReactJS, Gatsby, GraphQL, and npm.
        {` `}
        <br></br>
        ( <a className="Text" href={`https://www.instagram.com/${social.instagram}`}>
          Follow me on Instagram!
        </a> )
      </p>
    </div>
    </React.Fragment>
  )
}

export default Bio
