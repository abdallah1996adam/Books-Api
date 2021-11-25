import express from "express";
import middleWares from "./src/config/middleWares.js";
import Server from "./src/config/server.js";
import env from "./src/config/env.js";
import routes from "./src/modules/index.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import db from "./src/config/database.js";

const http = express();
const server = new Server(http);

server.middleWares(middleWares);
server.routes(routes);
server.errorHandler(errorHandler);


(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true})
        server.start(env.app_port);
    } catch (e) {
        console.error(e);
    }
})()
