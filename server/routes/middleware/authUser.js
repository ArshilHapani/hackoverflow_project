const jwt = require('jsonwebtoken');
const SECRET = 'SDJAINCOLLEGE';

const authUser = (req,res,next) => {
    const token = req.header('token');
    if(token){
        const data = jwt.verify(token,SECRET);
        req.user = data;
        next();
    }else{

    }
}

module.exports = authUser;