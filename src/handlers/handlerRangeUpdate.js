'use strict';

/**
 * handler that sets the range to put slower or faster the video 
 * @param {Event} event - triggered whenever the video range is updated. 
 */
import { video } from '../data';

export function handleRangeUpdate() {
     video[this.name] = this.value;
   }

 