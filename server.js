'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const server = express();

server.use(cors());


const PORT = process.env.PORT;
server.use(express.json());

const {getBookHandler} = require('./modules/Book');

const {addBook} = require('./modules/Book');

const {deleteHandler} = require('./modules/Book')

const {updateHandler} = require('./modules/Book')

const mongoose = require('mongoose') 

mongoose.connect(`${process.env.MONGO_SERVER_LINK}`);

// const axios = require('axios');


server.get('/' , home);
server.get('/books',getBookHandler)
server.post('/addBook', addBook)
server.delete('/deleteBook', deleteHandler)
server.put('/updateBook', updateHandler)
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
