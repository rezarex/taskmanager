const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())




//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is live on port ${port}..`))
    } catch (error) {
        console.log(error)
    }
}

start()













// const { application } = require('express')
// const express = require('express')
// const tasks = express.Router()


// //middleware
// application.use(express.json())


// //routes
// application.get('/hello',(req, res)=>{
//     res.send('Task Manager')
// })

// application.use('/api/v1/tasks', tasks)




