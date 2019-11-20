const auth = require('./auth');

function login(req, res){
    const {username, password} = req.body;
    try {
        if (auth.isAuth({username, password}) === true){
            //login logic here 
        }
    }
}

module.exports = {
    login
}