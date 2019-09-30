//libraries 
const express = require('express');

//Middleware


//Other files
const db = require('./data/hubs-model.js');
//This lets you access all the methods inside of the hubs model js file

const server = express();

//Api endpoints
server.get('/', (request, response) => {
    response.send('<h1>hello world from express</h1>');
});

server.get('/hubs', (req, res) => {
    db.find()
    .then(hubs => {
        // console.log(hubs);
        res.json(hubs)
    })
    .catch(err => {
        res.status(500).json({err: err})
    });
})
//Using the find method on the database file inside of hubs-model.js.
//Json is a variation of send that explicitly sends json.
//How is db.find  pulling in an array of hubs.

//POST --> Getting to post level implies that your are able to get the route
// In express req.body is not defined , need one more step is needed
//The body needs to be taking from the request and parsed on.
//Middleware adds  meat to the express framework

server.post('/hubs', (req, res)=> {

    const newHub = req.body;
    db.add(newHub)
    .then(hub => {
        res.status(201).json(hub);
    })
    .catch(err => {
        res.status(500).json({
            err: err,
            message:'failed to create a new hun'
        })
    })
});

server.get('/now', (request,response) => {
    const now = new Date().toISOString()
    response.send(now)
});

server.listen(4000, () => {
    console.log('server is listening in port 4000')
})


// express response knows the data type even  if you put the h1 in an string
// And the status code will come out to 200 if you don explicitly tell it.

//How to access the database, and pull the methods inside the database file
//Data access layer --> Methods that access the database for you

//You can test your code inside of postman to make sure that it works and there is nothi wrong