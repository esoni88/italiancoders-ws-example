var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 40999});

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message)
    })

    setInterval(() => {
        console.log('preparo il messaggio');
        //logiche di creazione del messagio
        const message =  { text: 'Ciao', sentAt: new Date() };
        ws.send(JSON.stringify(message));
    }, 1000);

})
