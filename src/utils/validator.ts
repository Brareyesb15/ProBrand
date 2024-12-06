import { User } from "../models/userModel";
import { Product } from "../models/productModel";

export const validateUser = (user: User): boolean => {
  return user.email.includes("@");
};

export const validateProduct = (product: Product): boolean => {
  return product.price > 0;
};
