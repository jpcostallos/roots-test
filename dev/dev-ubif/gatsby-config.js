require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `uBreakiFix Developers`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIR_TABLE_API_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: process.env.AIR_TABLE_BASE_ID,
            tableName: `Positions`,
            tableLinks: [`Applying for position`, ]
          },
          {
            baseId: process.env.AIR_TABLE_BASE_ID,
            tableName: `Interviewers`,
            tableLinks: [`Phone Screens`, `Onsite Interviews`]
          },
          {
            baseId: process.env.AIR_TABLE_BASE_ID,
            tableName: `Applicants`,
            tableLinks: [`Applying for`, `Phone Screen Interviewer`, `Onsite Interviewer`]
          },
          {
            baseId: process.env.AIR_TABLE_BASE_ID,
            tableName: `Blogs`,
          },
        ]
      }
    },
    `gatsby-plugin-postcss`
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
