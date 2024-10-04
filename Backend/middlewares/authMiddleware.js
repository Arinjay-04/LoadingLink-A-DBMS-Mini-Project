const { verifyToken, generateToken } = require('../utils/jwt');

// Common token verification logic
const verifyAuthorizationToken = (req, res, entityType) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.error('Unauthorized: No token provided');
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const tokenParts = authHeader.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        console.error('Unauthorized: Invalid token format');
        return res.status(401).json({ message: 'Unauthorized: Invalid token format. Expected "Bearer <token>"' });
    }

    const token = tokenParts[1];

    try {
        const id = verifyToken(token);

        if (!id) {
            console.error('Unauthorized: Invalid token');
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        // Attach either hotelId or userId based on the entityType
        req[entityType] = id;
        return true; // Success
    } catch (error) {
        console.error('Unauthorized: Token verification failed', error);
        res.status(401).json({ message: 'Unauthorized: Token verification failed', error });
        return false; // Failure
    }
};

// Middleware for hotel authentication
const authMiddlewareHotel = (req, res, next) => {
    if (verifyAuthorizationToken(req, res, 'hotelId')) {
        next(); // Proceed to next middleware if token is valid
    }
};

// Middleware for guest authentication
const authMiddlewareGuest = (req, res, next) => {
    if (verifyAuthorizationToken(req, res, 'userId')) {
        next(); // Proceed to next middleware if token is valid
    }
};

module.exports = {
    authMiddlewareHotel,
    authMiddlewareGuest
};
