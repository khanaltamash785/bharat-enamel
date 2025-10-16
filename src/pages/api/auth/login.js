export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Check if credentials match environment variables
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Import here to avoid issues
    const { generateToken } = await import('@/lib/auth');
    
    // Create JWT token
    const token = generateToken({ email, role: 'admin' });

    return res.status(200).json({
      success: true,
      token,
      message: 'Login successful'
    });
  }

  // Invalid credentials
  return res.status(401).json({
    success: false,
    error: 'Invalid email or password'
  });
}