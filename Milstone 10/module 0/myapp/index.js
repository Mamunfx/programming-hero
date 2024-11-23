const express = require('express')
const app = express()
const port = 200

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data',(req,res)=>{
    res.send('More data is coming soon!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})