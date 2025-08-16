import Server from "./server/config.js";
import router from "./src/routes/index.route.js";
const server = new Server();

server.app.use("/api", router);
server.listen();
