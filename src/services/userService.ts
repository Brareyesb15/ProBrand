import { User } from "../models/userModel";
import { log } from "../utils/logger";

export const getUser = (): User => {
  log("Fetching user");
  return { id: 1, name: "John Doe", email: "john.doe@example.com" };
};
