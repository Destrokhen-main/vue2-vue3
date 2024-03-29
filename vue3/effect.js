import { updateActiveEffect } from "./target.js";

export function effect(fn) {
  updateActiveEffect(fn);
  fn();
  updateActiveEffect(undefined);
}
