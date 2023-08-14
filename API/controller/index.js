const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
// importing all models 
const {users} = require('../model') //importg model object using destructing 
 routes.get('^/$|/challenger', (req, res) =>{
    users.fetchUsers(req, res)
 })

// setting up the controller 
//  ======USER ROUTER======
routes.get('/users',(req, res) =>{
    users.fetchUsers(req, res) //to fetch user from the db 
})
routes.get('/user/:id',(req, res) =>{
    users.fetchUsers(req, res)
})
routes.post('/register', bodyParser.json(), 
    (req, res)=>{
        users.updateUser(req, res)
})
routes.put('/user/:id', bodyParser.json(), 
    (req, res)=>{
        users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), 
    (req, res)=>{
        users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

module.exports = {
    express,
    routes
}


/**
 * ^ = start with and $ ends with
 */