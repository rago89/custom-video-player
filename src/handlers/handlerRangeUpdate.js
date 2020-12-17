'use strict';

/**
 * handler that sets the range to put slower or faster the video 
 * @param {Event} event - triggered whenever the video range is updated. 
 */

export function handleRangeUpdate() {
     video[this.name] = this.value;
   }

   const player = document.querySelector('.player');
   const ranges = player.querySelectorAll('.player__slider');