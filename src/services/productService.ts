import { Product } from "../models/productModel";
import { log } from "../utils/logger";

export const getProduct = (): Product => {
  log("Fetching product");
  return { id: 1, name: "Sample Product", price: 100 };
};
