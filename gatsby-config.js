const siteUrl = "https://intheclearapp.com"

module.exports = {
  trailingSlash: "ignore",
  siteMetadata: {
    title: `In The Clear`,
    description: `In The Clear`,
    author: `Josh Sauder`,
    website: "https://app.intheclearapp.com",
    siteUrl: siteUrl,
    app: `https://itunes.apple.com/us/app/in-the-clear/id1458058092?ls=1&#38;mt=8`,
    linkedin: 'https://www.linkedin.com/in/josh-sauder-5231a1106',
    github: 'https://github.com/joshsauder',
    contact: 'mailto:intheclearapp@gmail.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `In-The-Clear`,
        short_name: `In The Clear`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4A148C`,
        display: `minimal-ui`,
        icon: `src/images/Icon-60.png`
      }
    },
    `gatsby-plugin-offline`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-149710127-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "intheclearapp.com",
      },
    },
  ]
};
