import { Router } from "express";

import isAuth from "../../middlewares/auth.js";

export default (controller) => {
  const router = Router();
  router.route("/login").get(controller.login);
  router.route('/register').post(controller.signUp)
  router.route('/all' ).get(isAuth, controller.getAll)
  return router;
};
