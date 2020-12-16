'use strict';
export  const player = document.querySelector('.player');
export const video = player.querySelector('.viewer');
export const progress = player.querySelector('.progress');
export const progressBar = player.querySelector('.progress__filled');
export const toggle = player.querySelector('.toggle');
export const skipButtons = player.querySelectorAll('[data-skip]');
export const ranges = player.querySelectorAll('.player__slider')
