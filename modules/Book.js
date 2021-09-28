const mongoose = require('mongoose') 
   
// const axios = require('axios');

mongoose.connect('mongodb://localhost:27017/books');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('book', bookSchema);


function seedCatInformation() {
    const java = new bookModel ({
        title: 'java',
        description: 'about java',
        status: 'java',
        email:'leenkaraja24@gmail.com'
    })
    const javaScript = new bookModel({
        title: 'javaScript',
        description: 'about java',
        status: 'java',
        email:'leenkaraja24@gmail.com'
    })
    const html = new bookModel({
        title: 'html',
        description: 'about html',
        status: 'html',
        email:'leenkaraja24@gmail.com'
    })

    java.save();
    javaScript.save();
    html.save();
}

seedCatInformation()

function getBookHandler(req,res){
    let email1 = req.query.email1
    bookModel.find({email:email1},function(error,bookData) {
        if(error) {
            console.log('error in getting data',error)
        } else {
            console.log(bookData)
            res.send(bookData)
        }
    })
}
module.exports = getBookHandler;
