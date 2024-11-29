const express = require('express');
const cors = require('cors');
const port= process.env.PORT || 5002;
const app=express();
//md01993049420
//7wSVHtP2LYabFskz
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://md01993049420:7wSVHtP2LYabFskz@cluster5.ere94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get("/",(req,res)=>{
    res.send("Simple Database is running ")
});
app.get("/users",(req,res)=>{
    res.send("Simple Database is running and users")
});

app.listen(port,(req,res)=>{
    console.log(`Server is running in port: ${port}`);
    
})