const next = require('next');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');

const nextApp = next({ dev: false, conf: { distDir: 'public' } });
const handle = nextApp.getRequestHandler();

let server = express();
server.disable('x-powered-by');
server.use(cors());
server.use(bodyParser.json());
server.set('trust proxy', 1);
server.use(compression());
server.use(helmet());

server.get('*', (req, res) => handle(req, res));

exports.app = functions.https.onRequest(async (req, res) => {
  await nextApp.prepare();
  return server(req, res);
});
