import { RefImp } from "./Dep.js";
import { track } from "./track.js";
import { trigger } from "./trigger.js";
import { effect } from "./effect.js"

export function ref(value) {
  return new RefImp(value);
}

export function computed(getter) {
  const res = ref();

  effect(() => {
    res.value = getter()
  })

  return res;
}

export function reactive(obj) {
  const proxy = new Proxy(obj, {
    get(t, p) {
      track(this, p);
      return t[p]; // Reflect.get(t,p);
    },
    set(t, p, v) {
      const res = Reflect.set(t, p, v) // true / false // t[p] = v;
      trigger(this, p);
      return res;
    }
  })

  return proxy;
} 
