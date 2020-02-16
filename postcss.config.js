const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwind('./tailwind.config.js'),
    require('autoprefixer'),
    process.env.NODE_ENV == 'production' && purgecss({
      content: [
        {
          raw: '<html><body><div></div></body></html>',
          extension: 'html'
        },
        './pages/**/*.js',
        './components/**/*.js'
      ],
      defaultExtractor: content => content.match(/[-_/A-Za-z0-9]+/g) || []
    })
  ]
}
