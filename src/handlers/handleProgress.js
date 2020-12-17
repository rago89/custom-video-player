'use strict';
//  sets the time in tha video when the bar in dragged
import { progressBar } from '../data.js';

export function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }