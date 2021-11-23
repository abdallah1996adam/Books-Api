import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const middleWares = {
  logger: morgan("dev"),
  protect: helmet(),
  authorization: cors(),
  json: express.json(),
  urlIncoded: express.urlencoded({ extended: true }),
};

export default middleWares;
