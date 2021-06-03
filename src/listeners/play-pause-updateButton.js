"use strict";

import { updateButton } from "../handlers/updateButton.js";
import { video } from "../data.js";

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
