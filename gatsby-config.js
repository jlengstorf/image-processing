module.exports = {
  siteMetadata: {
    title: `Image Processing Benchmarks`,
    description: `A couple hundred images from Unsplash and Jason’s trip to Thailand that are all stored on disk at sizes up to 5MB — let’s make Gatsby earn it!`,
    author: `@jlengstorf`,
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
  ],
};
