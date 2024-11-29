const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5002;
const app = express();

app.use(cors());
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
    const database = client.db("userdb");
    const userCollection = database.collection("users");

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
