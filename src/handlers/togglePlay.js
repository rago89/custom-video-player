'use strict';


export function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }
  const video = player.querySelector('.viewer');