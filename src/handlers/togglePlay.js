"use strict";
import { video } from "../data.js";

export function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
