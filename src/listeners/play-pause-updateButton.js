'use strict';

import {updateButton} from '../handlers/updateButton.js';
import {video} from '../data';

 video.addEventListener('play', updateButton);
 video.addEventListener('pause', updateButton);

