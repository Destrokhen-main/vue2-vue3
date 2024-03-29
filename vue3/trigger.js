import { targetMap } from "./target.js";

export function trigger(target, prop) {
  let depsMap = targetMap.get(target);
  if(!depsMap) {
    return
  }

  const set = depsMap.get(prop);
  if (!set)
    return

  set.forEach(eff => eff())
}
