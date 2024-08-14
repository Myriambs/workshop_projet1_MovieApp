const express = require ('express')
const app = express()
require('dotenv').config()
const port = 4000
const cors = require('cors')
const connectdb = require ('./config/db')
const movieRoute= require('./route/movieRoute')

const authRoute = require('./route/auth')
connectdb()

app.use(express.json())

app.use(cors())

//routet thenyet el eflem ey 7aja mrbouta bil eflem 
 app.use('/movie',movieRoute)
//ey 7aja marbouta bil authenetification ( register login w jiben el user)
app.use('/auth',authRoute)











app.listen(port,err=>{
    err?console.log(err):console.log(`go to the port => ${port}`)
})