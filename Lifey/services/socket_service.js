var _config, _socket;

function emit(channel, data) {
    if (!_socket) return;
    _socket.emit(channel, data);
}

function start_sockets() {
    var chokidar = require('chokidar');
    chokidar.watch('public', { ignored: /(^|[\/\\])\../ }).on('all', (event, path) => {
        emit('system', { status: 'file_changed', data: { event: event, path: path } });
        emit('file-change', { event: event, path: path });
    });

    setInterval(function () { emit('system', { status: "Freakin awesome!" }) }, 3000);

    setTimeout(function () { setInterval(function () { emit('user', { status: "A doo wakka doo wakka doo wakka doo....." }) }, 13000) }, 200);

    setTimeout(function () { setInterval(function () { emit('debug', { status: "Pooped em..." }) }, 10000) }, 500);

    setTimeout(function () { setInterval(function () { emit('application', { status: "[CRUNCH]" }) }, 5000) }, 700);
}

function start_connection_sockets() {
    _socket.on('get-sockets', function (data) {
        emit('sockets', _config.app.sockets);
    });

    _socket.on('get-profile', function (data) {
        emit('profile', _config.public.profiles.dylan);
    });
}


module.exports = function (config, app) {

    _config = config;
    var server = require('http').createServer(app);
    var io = require('socket.io')(server);

    io.on('connection', function (s) {
        _socket = s;
        start_connection_sockets();
    });

    server.listen(3001, function () {   
        console.log('Socket server listening at port %d', 3001);
    });

    start_sockets();
};
