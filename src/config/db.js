const mongoose = require("mongoose")

const connection = () => {
    return mongoose
      .connect(process.env.MongoProtocolUrl)
      .then(() => {
        console.log("Connected")
      })
}

module.exports = connection;