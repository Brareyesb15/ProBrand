import { log, errorHandler } from "../utils/logger";
import { validateProduct } from "../utils/validator";
import { getProduct } from "../services/productService";

export const productController = () => {
  try {
    log("Product Controller Initialized");
    const product = getProduct();
    if (validateProduct(product)) {
      log("Product is valid");
    } else {
      log("Product is invalid");
    }
  } catch (error) {
    errorHandler(error);
  }
};
