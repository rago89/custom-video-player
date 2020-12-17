'use strict';

import {handleRangeUpdate} from '../handlers/handlerRangeUpdate.js';

/**
 * @name user input
 * calls the Handler when a user pressed the range-update 
 * */
 
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
