import { handleProgress } from "../handlers/handleProgress.js";
import { video } from "../data.js";

video.addEventListener("timeupdate", handleProgress);
