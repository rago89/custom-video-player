'use strict';

import {updateButton} from '../handlers/updateButton.js';

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);