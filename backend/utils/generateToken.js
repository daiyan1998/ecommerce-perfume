import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "strict",
  });
};

export { generateToken };
