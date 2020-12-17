'use strict';

import {togglePlay} from '../handlers/togglePlay.js';
import {video, toggle} from '../data';

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
