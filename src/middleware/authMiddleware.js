const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ success: false, errors: ['Access token is missing'] });

    jwt.verify(token, 'token_key', (err, decoded) => {
        if (err) return res.status(403).json({ success: false, errors: ['Invalid token'] });
        req.Chef_Id = decoded.Chef_Id;
        next();
    });

}

module.exports = authenticateToken;