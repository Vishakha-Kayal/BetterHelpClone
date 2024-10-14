import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  // console.log("Authorization Header:", req.headers["authorization"]); // Log the header
  const token = req.headers['authorization']?.replace("Bearer ", "") || req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(403).send("Access denied.");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token.");
    req.user = user;
    next();
  });
};
