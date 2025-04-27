import { userRoutes } from "./routes/userRoutes";
import { productRoutes } from "./routes/productRoutes";
import { log, errorHandler } from "./utils/logger";

export const app = () => {
  try {
    log("App Initialized");
    // userRoutes();
    productRoutes();
  } catch (error) {
    errorHandler(error);
  }
};
