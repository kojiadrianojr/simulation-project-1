const auth = require('./auth')

module.exports = function middleware(req,res, next){
    if (!req.headers.auth){
        const status = 401;
        const message = '[!] Unauthorized Access!';
        res.status(status).send({status,message});
        return
    }
    try {
        const token = auth.verifyToken(req.headers.auth);
        if (token instanceof Error){
            const status = 401;
            const message = '[!] Invalid Token';
            res.status(status).send({status, message});
            return
        }
        next();
    }catch(err) {
        const status = 401;
        const message = `[!] ${err} `;
        res.status(status).json({status, message})
    }
}