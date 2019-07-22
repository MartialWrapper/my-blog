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
    <div
      style={{
        display: `flex`,
        marginBottom: '15%',
        backgroundColor: '#ff9ed8',
        paddingLeft: '5%'
      }}
    >
      <p className="Text">
        <span className="LetHigh">H</span>ey! My name is <strong>{author}</strong> and I'm from Spain. I hope you really enjoy my blog's entries. Here we go!
        {` `}
        <br></br>
        ( <a href={`https://www.instagram.com/${social.instagram}`}>
          Follow me on Instagram!
        </a> )
      </p>
    </div>
  )
}

export default Bio
