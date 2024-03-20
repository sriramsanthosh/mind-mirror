const mongoose = require('mongoose');
require("dotenv").config();

// const localuri = process.env.MONGO_URI;
const uri = process.env.MONGO_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);


// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(localuri);
// }

// const db = mongoose.connection;


// (up and running) then print the message 
// db.once('open', function(){
//     console.log("Connected to database :: MongoDB");
// });