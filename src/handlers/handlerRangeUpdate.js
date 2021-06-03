/**
 * handler that sets the range to put slower or faster the video
 */
import { video } from "../data.js";

export function handleRangeUpdate() {
  video[this.name] = this.value;
}
