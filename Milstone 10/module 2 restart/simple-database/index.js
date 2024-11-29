const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5002;
const app = express();

app.use(cors());
//Middleware
app.use(express.json());

const uri = "mongodb+srv://md01993049420:7wSVHtP2LYabFskz@cluster5.ere94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const userCollection = client.db("userdb").collection("users");

    app.get('/users',async(req,res)=>{
      const cursor= userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        console.log(user);
        const result = await userCollection.insertOne(user);
        res.send(result);
        console.log(
          `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
      } catch (err) {
        res.status(500).send({ message: "Failed to insert user", error: err });
      }
    });

    app.delete("/users/:id",async(req,res)=>{
      const id= req.params.id;
      console.log(`delete from database`,id);
      const query ={_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query);
      res.send(result)
    })

    app.get("/users/:id",async(req,res)=>{
      const id= req.params.id;
      console.log(`detials of id : `,id);
      const query ={_id: new ObjectId(id)}
      const user = await userCollection.findOne(query);
      res.send(user)
    })

    app.put("/users/:id",async(req,res)=>{
      const id= req.params.id;
      const updatedUser=req.body;
      console.log(updatedUser);

      const filter={_id: new ObjectId(id)}
      const options={upsert:true}
      const databaseUpdater={
        $set:{
          name: updatedUser.name,
          email: updatedUser.email
        }
      }
      const result=await userCollection.updateOne(filter,databaseUpdater,options);
      res.send(result);
    })

    app.get("/", (req, res) => {
      res.send("Simple Database is running");
    });

    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });

  } catch (err) {
    console.error('Failed to connect to the database', err);
  }
}

run().catch(console.dir);
