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
        marginBottom: '10%',
        flexDirection: 'column'
      }}
    >
      <h1 className="Title" style={{maxWidth: '50%', fontSize: '20px', color: 'black', textAlign: 'left'}}><span className="Span-One">Who Am I? What do I know?</span></h1>
      <p className="Text">
        My name is <strong>{author}</strong>, aaand ... I'm from a little -- but not that small -- southern European country. Guess which one ;-): Spain. <br /> I've been so interested in 'tech' since I was a little boy, and now I'm trying to become a self-taught developer, <span className="LetHigh">totally from scratch!</span> <br /> <br /> <div className="Wrapper-Mini"><span className="LetHigh2">My current stack is:</span> Javascript, ReactJS, Gatsby, GraphQL, and npm. </div>
        {` `}
        <br />
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
