const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

module.exports.verifyToken = async (req, res, next) => {
      try {
            // Extract Authorization header and split into parts
            const authHeader = req.headers['authorization'];

            // Check if Authorization header exists and split into parts
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                  return res.status(403).json({
                        success: false,
                        message: "Not Authorized"
                  });
            }

            // Extract just the token part after 'Bearer '
            const jwtToken = authHeader.split('Bearer ')[1];
            console.log("Token from request:", jwtToken);

            // Verify token and extract payload
            const payload = jwt.verify(jwtToken, SECRET_KEY);
            req.user = payload.user; // Attach user information to the request object
            console.log("RequestedUserID"+req.user.id)

            // Proceed to the next middleware or route handler
            next();
      } catch (err) {
            console.error("JWT verification error:", err.message);
            return res.status(403).json({
                  success: false,
                  message: "Not Authorized"
            });
      }
};