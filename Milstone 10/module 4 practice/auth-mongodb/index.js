require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster5.ere94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5`;

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
    const userCollection = client.db("userdb-2").collection("users");

    app.post("/users", async (req, res) => {
      try {
        const userinfo = req.body;
        const result = await userCollection.insertOne(userinfo);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: 'Failed to add user', error });
      }
    });

    app.get("/users", async (req, res) => {
      try {
        const cursor = userCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve users', error });
      }
    });

    app.get("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await userCollection.findOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve user', error });
      }
    });

    app.patch("/users", async (req, res) => {
      try {
        const email = req.body?.email;
        const filter = { email };
        const updateDoc = {
          $set: {
            createdAt: req.body.createdAt
          }
        };
        const result = await userCollection.updateOne(filter, updateDoc);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: 'Failed to update user', error });
      }
    });

    app.delete("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await userCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: 'Failed to delete user', error });
      }
    });

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', async (req, res) => {
  res.send("coffee server is running");
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
