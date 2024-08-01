const express = require ('express')
const app = express()

const port = 4000
const cors = require('cors')
const connectdb = require ('./config/db')
const movieRoute= require('./route/movieRoute')
connectdb()

app.use(express.json())

app.use(cors())


 app.use('/movie',movieRoute)













app.listen(port,err=>{
    err?console.log(err):console.log(`go to the port => ${port}`)
})