const express= require('express')
const app= express()
const bodyParser= require('body-parser')
const mongoose= require('mongoose')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use( require('./routes/userRoute'))

app.listen(9000,()=>{
    console.log(`Running server on http://localhost:9000`);
})