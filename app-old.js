const http = require('http');

http.createServer(( request, response) => {
    response.write('holamndo');
    response.end();
}).listen( 8080 );

console.log('escuchando puerto 8080');