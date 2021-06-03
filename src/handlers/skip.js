/**
 * play a video when the user press the skip button , which are connected to video files
 */
import { video } from "../data.js";

export function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
