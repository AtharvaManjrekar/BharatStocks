import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // Expect format: "Bearer <token>"
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

    if (!token) {
      return res.status(401).json({ message: "Access Denied. Token missing." });
    }

    // Verify token using environment variable or fallback
    const secret = process.env.JWT_SECRET || "SECRET123";
    const verified = jwt.verify(token, secret);

    // Attach user info to request
    req.user = verified; // e.g., { id: user._id, email: user.email }

    next();
  } catch (err) {
    console.error("Auth Error:", err.message); // log the error
    return res.status(401).json({ message: "Invalid token" });
  }
}
