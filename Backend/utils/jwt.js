const jwt = require('jsonwebtoken');
// require('../dotenv').config(); 
const secret = 'Arinjay-04';

const generateToken = (hotelId) => {
    return jwt.sign({ hotelId }, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded.hotelId;
    } catch (error) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
