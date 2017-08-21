var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();

var WebService = function (config, database) {

    var publicDir = path.join(__dirname, '../public');

    app.use(express.static(publicDir))
    app.use(bodyParser.json({ type: 'application/json' }));

    require('./web_service_routes')(app, database);

    app.listen(3000, function () {
        console.log('listening on 3000')
    });

    return app;
};

module.exports = WebService;
