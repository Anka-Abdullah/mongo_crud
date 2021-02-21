const express = require('express')
const route = express.Router()

const { home, add, update } = require('../services/render')
const { create, find, patch, del } = require('../controller/user')

route.get('/', home)
route.get('/add_user', add)
route.get('/update_user', update)

//API
route.post('/api/users', create)
route.get('/api/users', find)
route.patch('/api/users/:id', patch)
route.delete('/api/users/:id', del)

module.exports = route
