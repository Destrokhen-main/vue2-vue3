import { updateTarget } from "./target.js"

export function effect(func) {
  updateTarget(func)
  func()
  updateTarget(null)
}
