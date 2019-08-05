const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.send('hello world from express');
});

server.get('/now', (request,response) => {
    const now = new Date().toISOString()
    response.send(now)
});

server.listen(4000, () => {
    console.log('server is listening in port 4000')
})


//I think thats the wau to get thdat and time: I'm not too sur to b honest
//

//response.send(Date.now)