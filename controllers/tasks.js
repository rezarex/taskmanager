const Task = require('../models/task')

const getAllTasks = (req, res) =>{
    res.send('vitu zote')
}

const createTask = (req, res) =>{
    res.json(req.body)
}

const getTask = (req, res) =>{
    res.json(req.params.id)
}

const updateTask = (req, res) =>{
    res.json(req.params.id)
}

const deleteTask = (req, res) =>{
    res.json(req.params.id)
}
module.exports = {
    getAllTasks,createTask, getTask,updateTask,deleteTask
} 