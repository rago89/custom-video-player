'use strict';


 export function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
  }
  const toggle = player.querySelector('.toggle');