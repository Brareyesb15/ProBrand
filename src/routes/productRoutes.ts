import { productController } from "../controllers/productController";
import { log } from "../utils/logger";

export const productRoutes = () => {
  log("Product Routes Initialized");
  productController();
};
