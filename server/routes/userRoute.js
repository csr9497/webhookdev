const express= require('express')
const app= express()

const opti = (req) =>{
    const rp = require('request-promise')
    headers= { 'x-api-key': 'af6fdaaa-b9a5-4d26-9844-5c0a6b4cb2db' , 'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTQzYWU1OTNmNTE5MDk5MGZiNjlhNiIsImlhdCI6MTU3ODM4NDEwMSwiZXhwIjoxNTc4NDcwNTAxfQ.gA3RaGniesUevBJixf4GEuunOhTCQPqIKginNhPDxFk"}
    const body = req.body.content
    const data = { data:body, type: 'provider'}
    const dir = `http://192.168.1.39:8000/service/5e143ae593f5190990fb69a6`
    const consult = async () => {
    var options = {
    method:'POST',
    url: dir,
    headers: headers,
    json: true,
    form: data
}
return result = await rp(options)
    }
    return consult
}
app.post('/chargebee/payment2',(req,res) => {
    res.send('Data recivied')
    setTimeout( opti(req),3000)
}) 
module.exports = app