const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  distDir: process.env.NODE_ENV === 'production' ? `../functions/public` : '.next',
})
