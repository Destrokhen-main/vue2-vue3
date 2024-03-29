const targetMap = new WeakMap();
let activeEffect;

function updateActiveEffect(v) {
  activeEffect = v
}

export {targetMap, activeEffect, updateActiveEffect };
