module.exports = {

  siteMetadata: {
    title: `Alex F. Calvo`,
    author: `Alex F. Calvo`,
    description: `A blog.`,
    siteUrl: `https://alex-blog.netlify.com/`,
    social: {
      github: `https://github.com/MartialWrapper`,
      email: `mailto:afc1601@gmail.com`,
      linkedin: `https://www.linkedin.com/in/alexf01/`,
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
        name: `My Gatsby Blog`,
        short_name: `GatsbyJSfromAlex`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#dddfd4`,
        display: `minimal-ui`,
        icon: `content/assets/pic.jpg`,
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
