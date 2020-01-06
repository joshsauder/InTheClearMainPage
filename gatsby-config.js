module.exports = {
  siteMetadata: {
    title: `In The Clear`,
    description: `In The Clear`,
    author: `Josh Sauder`,
    app: `https://itunes.apple.com/us/app/in-the-clear/id1458058092?ls=1&#38;mt=8`,
    website: "",
    linkedin: 'https://www.linkedin.com/in/josh-sauder-5231a1106',
    github: 'https://github.com/joshsauder',
    contact: 'mailto:intheclearapp@gmail.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/Icon-60.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-149710127-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    }

  ]
};
