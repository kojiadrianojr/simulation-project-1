const fs = require('fs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY
const userDb = JSON.parse(fs.readFileSync('./db.json'), 'UTF-8');
const duration = '1h'

function isAuth({username, password}){
    return userDb.users.findIndex(user => user.username === username && user.password === password) !=-1 
}

function verifyToken(token){
    return jwt.verify(token, SECRET_KEY)
}

function createToken(payload){
    return jwt.sign(payload, SECRET_KEY, {duration})
}

module.exports = {
    isAuth,
    verifyToken,
    createToken
}

