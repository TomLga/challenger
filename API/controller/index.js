const express = require('express')
const bodyParser = require('body-parser')
const verifyAToken = require('../middleware/authication')

const routes = express.Router()
// importing all models 
const {user} = require('../model') //importg model object using destructing 
// setting up the controller 
//  ======USER ROUTER======
routes.get('/users',(req, res) =>{
    user.fetchUsers(req, res) //to fetch user from the db  //user is the file name thaat its coming from 
})
routes.get('/user/:id',(req, res) =>{
    user.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(), 
    (req, res)=>{
        user.register(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    user.login(req, res)
})
routes.put('/user/:id', bodyParser.json(), 
    (req, res)=>{
        user.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), 
    (req, res)=>{
        user.updateUser(req, res)
})
routes.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res)
})

module.exports = {
    express,
    routes
}




/**
 * ^ = start with and $ ends with
 */