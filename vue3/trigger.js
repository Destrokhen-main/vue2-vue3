import { targetMap } from "./target.js";

export function trigger(target) {
  let depsMap = targetMap.get(target);
  if(!depsMap) {
    return
  }

  depsMap.forEach(dep => {
    dep.forEach(eff => eff());
  });
}
