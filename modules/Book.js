const mongoose = require("mongoose");

// const axios = require('axios');

// mongoose.connect('mongodb://localhost:27017/books');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

const bookModel = mongoose.model("book", bookSchema);

function seedCatInformation() {
  const java = new bookModel({
    title: "java",
    description: "about java",
    status: "java",
    email: "leenkaraja24@gmail.com",
  });
  const javaScript = new bookModel({
    title: "javaScript",
    description: "about java",
    status: "java",
    email: "leenkaraja24@gmail.com",
  });
  const html = new bookModel({
    title: "html",
    description: "about html",
    status: "html",
    email: "leenkaraja24@gmail.com",
  });

      // java.save();
      // javaScript.save();
      // html.save();
}

// seedCatInformation()

function getBookHandler(req, res) {
  let email = req.query.email;
  bookModel.find({ email: email }, function (error, bookData) {
    if (error) {
      console.log("error in getting data", error);
    } else {
      // console.log(bookData)
      res.send(bookData);
    }
  });
}

async function addBook(req, res) {
//   console.log(1111111111,req.body)
  let { title, description, status, email } = req.body;



  await bookModel.create({
      title:title,
      description:description,
      status :status,
      email:email

  })

  bookModel.find({ email: email }, function (error, emailData) {
    if (error) {
      console.log("error in getting data", error);
    } else {
    //   console.log(22222222222,emailData)
      res.send(emailData);
    }
  });
}

function deleteHandler(req, res) {
  let bookID = req.query.bookID;

  bookModel.deleteOne({ _id: bookID }).then(() => {
    bookModel.find({ bookID: bookID }, function (error, bookIDData) {
      if (error) {
        console.log("error in getting data", error);
      } else {
        // console.log(bookIDData)
        res.send(bookIDData);
      }
    });
  });
}

function updateHandler(req , res){
  console.log(1255298,req.body)
  let { title, description, bookID,status, email } = req.body;
  

  bookModel.findByIdAndUpdate(bookID , {title, description ,status, email} , (error,updatedData) => {
    if(error){console.log('error in updating')}
    else{
      console.log('updatedData', updatedData);
      bookModel.find({ email: email }, function (error,emailData) {
        if (error) {
          console.log("error in getting data", error);
        } else {
        //   console.log(22222222222,emailData)
          res.send(emailData);
        }
      });
    }
  })
}

// module.exports = getBookHandler;
// module.exports = addBook;

// module.exports = deleteHandler;

module.exports ={
    getBookHandler,
    addBook,
    deleteHandler,
    updateHandler
}
