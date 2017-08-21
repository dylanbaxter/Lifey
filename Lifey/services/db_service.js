
var DbService = function (config) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(config.app.dbUrl, function (err, database) {
        if (err) {
            console.log(err);
        }
        return database;
    });
};

module.exports = DbService;
