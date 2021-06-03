import { skip } from "../handlers/skip.js";
import { skipButtons } from "../data.js";

/**
 * @name user input
 * calls the Handler when a user pressed the skip update
 * */

skipButtons.forEach((button) => button.addEventListener("click", skip));
