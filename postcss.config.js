module.exports = () => ({
    plugins: [
        require(`precss`),
        require(`tailwindcss`)(`./src/css/styles.css`),
        require(`autoprefixer`)()
    ]
})
