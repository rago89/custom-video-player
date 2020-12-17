'use strict';
import {video} from '../data';

export function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }
  