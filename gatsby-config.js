require('ts-node').register({files: true})

module.exports = {
  siteMetadata: {
    title: `Choi, Woohyeok | HCI, exertion game, mobile health intervention`,
    description: `Choi, Woohyeok's personal website.`,
    author: `Choi, Woohyeok`,
    email: `woohyeok.choi@kaist.ac.kr`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-excel`,
      options: {
        defval: "",
        raw: false
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-add-classes`,
            options: {
              paragraph: 'markdown-paragraph'
            }
          },
          "gatsby-remark-copy-linked-files",

        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Choi, Woohyeok | HCI, mobile health intervention`,
        short_name: `Choi, Woohyeok`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`, // This slug is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
