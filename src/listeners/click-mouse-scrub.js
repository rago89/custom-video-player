import { scrub } from "../handlers/scrub.js";
import { progress } from "../data.js";
let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
