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

  const { author } = data.site.siteMetadata
  return (
    <React.Fragment>
    <div
      style={{
        display: `flex`,
        marginTop: '9%',
        marginBottom: '0%',
        flexDirection: 'column'
      }}
    >
      <h1 className="Title" style={{maxWidth: '50%', fontWeight: '600', fontSize: '10px', color: 'black', textAlign: 'left'}}><span className="Span-One">Who Am I? What do I know?</span></h1>
      <p className="Text">
        My name is <strong>{author}</strong>, a junior <b style={{fontSize: '14px'}}>front-end developer</b>, aaand ... I'm from a little -- but not that small -- southern European country. Guess which one ;-): Spain. <br /> I've been so interested in 'tech' since I was a little boy, and now I'm trying to become a self-taught developer and it's so amazing, <span className="LetHigh">isn't it!?</span> <br /> <br /> <div className="Wrapper-Mini"><span className="LetHigh2">My current stack is:</span> Javascript, ReactJS, Gatsby, GraphQL, and npm. </div>
        {` `}
        <br />
        <br></br>
      </p>
    </div>
    </React.Fragment>
  )
}

export default Bio
