'use strict';

/**
 * play a video when the user press the skip button , which are connected to video files 
 * @param {Event} event - triggered whenever a user press one of the skip button connected to the video files. 
 */
import {video} from '../data'; 


export function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
   }
   
   const player = document.querySelector('.player');
   const skipButtons = player.querySelectorAll('[data-skip]');