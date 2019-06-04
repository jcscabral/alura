var http = require('http')
    ,app = require('./config/express');

/*
    TODO: Incrementar servidor
*/
http.createServer(app).listen(3000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

