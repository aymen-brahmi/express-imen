const express = require('express')
const Datee=require("./middleware/Date")
const app = express()
app.use(Datee)
app.use(express.static(__dirname +"/public"));
const port = 5000;


app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
}
 )

 app.get('/services', (req,res)=>{
    res.sendFile(__dirname+"/public/services.html")
}
 )
 app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")
}
 )

 app.get('*', (req,res)=>{
    res.send("<h1>404 Ammar</h1>")
    console.log(req.method)
}
 )
 
 app.listen(port,(err)=>
err ? console.log(err) : console.log(`the app is listening to ${port}`)
);
