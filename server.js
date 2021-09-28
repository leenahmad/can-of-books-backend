'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const server = express();

server.use(cors());


const PORT = process.env.PORT;
server.use(express.json());

const getBooksHandler = require('./modules/Book');

const addBook = require('./modules/Book');

const deleteHandler = require('./modules/Book')

const mongoose = require('mongoose') 

mongoose.connect('mongodb://localhost:27017/books');

// const axios = require('axios');


server.get('/' , home);
server.get('/books',getBooksHandler)
server.post('/addBook', addBook)
server.delete('/deleteBook', deleteHandler)
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
