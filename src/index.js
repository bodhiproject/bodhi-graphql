require('dotenv').config();

const loglvl = process.env.loglvl || 'silent';
var log = require('loglevel');
log.setDefaultLevel(loglvl);

const path = require('path');
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const { spawn } = require('child_process');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const opn = require('opn');

const schema = require('./schema');

const syncRouter = require('./route/sync');
const apiRouter = require('./route/api');

const startSync = require('./sync');

const PORT = 5555;

const server = restify.createServer({
  title: 'Bodhi Synchroniser',
});

const cors = corsMiddleware({
  origins: ['*'],
});

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.use(restify.plugins.queryParser());
server.on('after', (req, res, route, err) => {
  if (route) {
    log.info(`${route.methods[0]} ${route.spec.path} ${res.statusCode}`);
  } else {
    log.log(`${err.message}`);
  }
});

const startAPI = async () => {
  syncRouter.applyRoutes(server);
  apiRouter.applyRoutes(server);

  server.get(/\/?.*/, restify.plugins.serveStatic({
    directory: path.join(__dirname, '../ui'),
    default: 'index.html',
  }));

  server.listen(PORT, () => {
    SubscriptionServer.create(
      { execute, subscribe, schema },
      { server, path: '/subscriptions' },
    );
    console.log(`Bodhi App is running on http://localhost:${PORT}.`);
  });
};

const openBrowser = async () => {
  try {
    const platform = process.platform;
    if (platform.includes('darwin')) {
      await opn(`http://localhost:${PORT}`, {
        app: ['google chrome', '--incognito'],
      });
    } else if (platform.includes('win')) {
      await opn(`http://localhost:${PORT}`, {
        app: ['chrome', '--incognito'],
      });
    } else if (platform.includes('linux')) {
      await opn(`http://localhost:${PORT}`, {
        app: ['google-chrome', '--incognito'],
      });
    }
  } catch(err) {
    log.debug('Chrome not found. Launching default browser.');
    await opn(`http://localhost:${PORT}`);
  }
};

// avoid using path.join for pkg to pack qtumd
const qtumdPath = `${path.dirname(__dirname)}/qtumd`;
const qtumprocess = spawn(qtumdPath, ['-testnet', '-logevents', '-rpcuser=bodhi', '-rpcpassword=bodhi'], {});

qtumprocess.stdout.on('data', (data) => {
  log.log(`stdout: ${data}`);
});

qtumprocess.stderr.on('data', (data) => {
  log.error(`qtum node cant start with error: ${data}`);
  process.exit();
});

qtumprocess.on('close', (code) => {
  log.log(`qtum node exited with code ${code}`);
  process.exit();
});

function exit(signal) {
  log.log(`Received ${signal}, exiting`);
  qtumprocess.kill();
  process.exit();
}

process.on('SIGINT', exit);
process.on('SIGTERM', exit);
process.on('SIGHUP', exit);

// 3s is sufficient for qtumd to start
setTimeout(() => {
  startSync();
  startAPI();
  openBrowser();
}, 3000);
