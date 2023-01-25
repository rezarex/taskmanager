const express = require('express')
const app = express()
const tasks = require('./routes/tasks')


//middleware
app.use(express.json())


//routes
app.get('/hello', (req, res)=>{
    res.send('Nimefika yoh!')
})


app.use('/api/v1/tasks', tasks)



const port = 3000

app.listen(port, console.log(`server is live on port ${port}..`))











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




