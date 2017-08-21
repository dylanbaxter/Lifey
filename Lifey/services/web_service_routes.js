var path = require('path');

module.exports = function(app, db) {

    var publicDir = path.join(__dirname, '../public');

    // the index file
    app.get('/', function(req, res) {
        res.render(publicDir + '/index.html', {})
    });

};
