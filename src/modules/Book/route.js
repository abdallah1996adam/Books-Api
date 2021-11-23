import { Router } from "express";

import bookContoller from "./controller";

const entrypoint = "/books";
const booksRouter = Router();

booksRouter
  .route(entrypoint)
  .post(bookContoller.getAll)
  .get(bookContoller.getOne);

booksRouter.route(`${entrypoint}/:id`).post(bookContoller.getById);

export default booksRouter;
