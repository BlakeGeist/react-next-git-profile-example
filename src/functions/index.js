const next = require('next');
const functions = require('firebase-functions');
const app = next({ dev: false, conf: { distDir: "public" } })
const handle = app.getRequestHandler()

exports.app = functions.https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  return app.prepare().then(() => handle(request, response))
})
