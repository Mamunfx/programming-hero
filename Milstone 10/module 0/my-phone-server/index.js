const express=require('express')
const phones = require('./phone.json')
const app=express()
const port =201

app.get('/',(req,res)=>{
    res.send('This is phone server , coming soon')
})
app.get('/data',(req,res)=>{
    res.send(phones)
})
app.get('/data/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const specificPhone= phones.find(phone => phone.id === id);
    res.send(specificPhone)
})

app.listen(port, ()=>{
    console.log(`console log of my phone server in port : ${port}`);
    
})