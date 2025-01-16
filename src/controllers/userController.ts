import { log, errorHandler } from "../utils/logger";
import { validateUser } from "../utils/validator";
import { getUser } from "../services/userService";

export const userController = () => {
  try {
    log("User Controller Initialized");
    const user = getUser();
    if (validateUser(user)) {
      log("User is valid");
    } else {
      log("User is invalid");
    }
    errorHandler(error);
  }
};
