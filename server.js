const address =  require("address");

var server  = {
    port:10311,
    noInfo: true,
    contentBase:"./app/",
    host:address.ip()
}

console.log( "http://" + server.host +":"+ server.port )

module.exports = server;