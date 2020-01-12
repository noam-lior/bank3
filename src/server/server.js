const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port=3001
const path=require('path')
const api=require('./routes/api')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,"..","node_modules")))

app.use('/',api)


app.listen(port,()=>{console.log(`server is running on port ${port}` )})