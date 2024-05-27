import jwt from "jsonwebtoken";

export const createJWT = () => {
  const token = jwt.sign(
    { id: user.id, username: user.userName },
    process.env.JWT_SECRET
  );
  return token;
};
