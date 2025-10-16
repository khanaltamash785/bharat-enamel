import jwt from 'jsonwebtoken';

// Generate a JWT token when user logs in
export function generateToken(payload) {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '24h' } 
  );
}

// Verify if a token is valid
export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null; 
  }
}

// Check if user is authenticated 
export function isAuthenticated(req) {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);
  
  return decoded !== null;
}