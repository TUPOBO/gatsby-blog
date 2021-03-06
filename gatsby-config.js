/*
 * @LastEditors: tupo
 */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Personal Bolg",
    description: "Personal Blog",
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`
      }
    }
  ],
}
