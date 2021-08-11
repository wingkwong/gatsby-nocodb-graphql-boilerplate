require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
  },
  flags: {},
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          styles: 'src/styles',
          pages: 'src/pages',
          types: 'src/types',
          components: 'src/components',
          lib: 'src/lib',
        },
        extensions: [],
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'NocoDB',
        fieldName: 'nocodb',
        url: `${process.env.NOCODB_GRAPHQL_URL}`,
        headers: {
          'xc-token': `${process.env.NOCODB_GRAPHQL_XC_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
  ],
};
