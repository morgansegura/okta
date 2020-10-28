module.exports = {
    sitemetadata: {

    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: 'Montserrat',
                        weights: ['300', '400', '600', '700']
                    },
                ]
            }
        },
    ]
}
