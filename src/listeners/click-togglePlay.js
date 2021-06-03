import { togglePlay } from "../handlers/togglePlay.js";
import { video, toggle } from "../data.js";

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
