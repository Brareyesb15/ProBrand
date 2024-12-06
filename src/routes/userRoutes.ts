import { userController } from "../controllers/userController";
import { log } from "../utils/logger";

export const userRoutes = () => {
  log("User Routes Initialized");
  userController();
};
