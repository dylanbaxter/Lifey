
var Config = require('./configs/dev-config');
var config = new Config().WholeThing();

if (!config) {
    console.log('Could not load config!');
    throw ('Could not load config!');
}

var db = config.enableDb ?
    require('./services/db_service')(config) : null;

var app = require('./services/web_service')(config, db);

if (config.app.enableWebsockets)
    require('./services/socket_service')(config, app);

module.exports = app;
