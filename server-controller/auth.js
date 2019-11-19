const fs = require('fs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY
const userDb = JSON.parse(fs.readFileSync('../db.json'), 'UTF-8');


function isAuth({username, password}){
    return userDb.users.findIndex(user => user.username === username && user.password === password) !=-1 
}

function verifyToken(token){
    return jwt.verify(token, SECRET_KEY, (err, decoded) => console.log(decoded))
}

module.exports = {
    isAuth,
}

