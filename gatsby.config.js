module.exports = {
    sitemetadata: {

    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: 'Open Sans',
                        weights: ['300', '400', '600', '700']
                    },
                    {
                        family: 'Cairo',
                        weights: ['400', '600', '700']
                    },
                    // {
                    //   family: 'Roboto Slab',
                    //   weights: ['400', '700']
                    // },
                ]
            }
        },
    ]
}
