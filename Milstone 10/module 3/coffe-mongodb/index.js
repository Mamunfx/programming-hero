const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5001;

//Middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster5.ere94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5`;

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

    // mongodb cluster er vitore folder + file bananor moto 
    const coffeeCollection= client.db("coffedb").collection("coffee");

    app.post("/coffee",async(req,res)=>{
      const coffeData=req.body; //collecting data from client
      console.log(coffeData);
      const result = await coffeeCollection.insertOne(coffeData); // sending data to mongodb
      res.send(result)  /// it returns some info in the console log
    })

    //making server + connecting with mongodb folder/file
    app.get("/coffee",async(req,res)=>{
      const cursor = coffeeCollection.find();
      const result =await cursor.toArray();
      res.send(result);
    })


    //Routing into a specific coffee item form database
    app.get("/coffee/:id",async(req,res)=>{
      const id= req.params.id;
      const query ={_id: new ObjectId(id)};
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    })

    app.put("/coffee/:id",async(req,res)=>{
      const id = req.params.id
      const filter={_id: new ObjectId(id)}
      const options={upsert:true};
      const updatedCoffeeInfo= req.body;
      const newCoffee={
        $set:{
          Name: updatedCoffeeInfo.Name,
          supplier : updatedCoffeeInfo.supplier,
          taste : updatedCoffeeInfo.taste,
          category : updatedCoffeeInfo.category,
          details : updatedCoffeeInfo.details,
          photo : updatedCoffeeInfo.photo
        }
      }
      const result = await coffeeCollection.updateOne(filter,newCoffee,options)
      res.send(result)
    })

    app.delete("/coffee/:id",async(req,res)=>{
      const id = req.params.id
      const query={_id: new ObjectId(id)}
      const result = await coffeeCollection.deleteOne(query)
      res.send(result)
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',async(req,res)=>{
  res.send("coffe server is running") 
})
app.listen(port,(req,res)=>{
    console.log("server is running : ",port);
})
