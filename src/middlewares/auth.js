import jwt from "jsonwebtoken";

import env from "../config/env.js";
import ApiError from "../helpers/ApiError.js";

const isAuth = (req, res, next) => {
  const authorization = req.headers['authorization'];
  try {
    if (!authorization) throw new ApiError(401, "not authorization !!");

    const token = authorization.split(" ")[1];
    if(!token) throw new ApiError(401, "missing token")

    const data = jwt.verify(token, env.jwt_secret);
    console.log(data);
    req.userId = data.id
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
};

export default isAuth;
