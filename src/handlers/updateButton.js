import { toggle } from "../data.js";

export function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}
