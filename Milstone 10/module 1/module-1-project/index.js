const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const data =[
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "published_year": 1960,
      "genre": "Fiction",
      "price": 7.99
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "published_year": 1949,
      "genre": "Dystopian",
      "price": 6.99
    },
    {
      "id": 3,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "published_year": 1813,
      "genre": "Romance",
      "price": 5.99
    },
    ]
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data',(req,res)=>{
    res.send(data);
})
app.post('/data',(req,res)=>{
console.log('post api hitting');
  console.log(req.body);
  res.send(data)
})
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`)
})