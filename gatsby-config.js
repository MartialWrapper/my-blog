module.exports = {

  siteMetadata: {
<<<<<<< HEAD
    title: `Alex's Lounge`,
=======
    title: `ALEX'S LOUNGE`,
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
    author: `Alex F. Calvo`,
    description: `A blog.`,
    siteUrl: `https://alex-blog.netlify.com/`,
    social: {
      instagram: `lexeydev`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
<<<<<<< HEAD
        name: `Gatsby Blog`,
=======
        name: `Gatsby Starter Blog`,
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
<<<<<<< HEAD
        icon: `content/assets/pic.jpg`,
=======
        icon: `content/assets/gatsby-icon.png`,
>>>>>>> a1b83efdd6694bd721e2c4fee83fbec5f4853c79
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

  ],
}
