const mongoose = require("mongoose")

const connection = () => {
    return mongoose
      .connect(
        "mongodb+srv://rahulkumarmbd:kooapp@cluster0.mkikz.mongodb.net/test"
      )
      .then(() => {
        console.log("Connected")
      })
}

module.exports = connection;