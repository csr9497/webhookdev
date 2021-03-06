const express= require('express')
const app= express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const corsOptions = {
    origin: ['192.168.100.16'],
    // methods: 'GET'
}
app.use(morgan('dev'))
app.use(cors(corsOptions))
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

const opti = (req, payload) =>{
    const rp = require('request-promise')
    headers = {
        'x-api-key': 'af6fdaaa-b9a5-4d26-9844-5c0a6b4cb2db', 
        'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTVmMzRkMzRkMmZhMzE0YWM5MDYxNyIsImlhdCI6MTU3ODQ5Njg0NX0.1dEMiBAqeMdFsRhB86hUCCrNIogsou6Ulvij3NzgDwY'}
    const dir = req.body.data.webhook
    const consult = async () => {
        var options = {
            method:'POST',
            url: dir,
            headers: headers,
            json: true,
            form: payload
            }
        return result = await rp(options)
    }
    return consult
}
app.post('/chargebee/payment',(req,res) => {
    const payload = req.headers.card == req.headers.key ? toSend(req, 'ok') : toSend(req,'fail')
    res.send(req.body)
    setTimeout( opti(req, payload),3000)
}) 
module.exports = app


const toSend = ({ body}, status) =>{

    const responseToSend = { 
        response: {
            service: 'chargeebee',
            date:'now',
            number: Date.now() /10*10,
            operation: body.data.operation,
            status: status,
            detail: `${status} operation`,
            data: body.data
        }
    }
    return responseToSend   
}
