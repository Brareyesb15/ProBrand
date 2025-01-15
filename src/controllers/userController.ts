import { log, errorHandler } from "../utils/logger";
import { validateUser } from "../utils/validator";
import { getUser } from "../services/userService";

export const userController = () => {
  try {
    log("User Controller Initialized");
    const user = getUser();
    if (validateUse(user)) {
      log("User is valid");
    } else {
      log("User is invalid");
    }
  } catch (error) {
    errorHandler(error);
  }
};
