'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const server = express();

server.use(cors());

const PORT = process.env.PORT;

const getBooksHandler = require("./modules/Book");

// const axios = require('axios');

server.get('/' , home);
server.get('/getCatsOwner',getBooksHandler)
server.get("*", notFound);




function home(req, res){
    res.send('home router found')
}

function notFound(req, res) {
    res.status(404).send("route is not found");
  }
 
server.listen(PORT , () => {
    console.log(`listening on PORT ${PORT}`)
})
