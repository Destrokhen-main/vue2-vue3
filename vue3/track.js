import { targetMap, activeEffect } from "./target.js";

export function track(target, prop) {
  if (!activeEffect) return;

  let depsMap = targetMap.get(target);
  if(!depsMap){
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(prop);
  if(!dep) {
    dep = new Set();
    depsMap.set(prop, dep);
  }

  dep.add(activeEffect)
}
