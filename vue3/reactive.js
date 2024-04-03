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
    get(target, prop) {
      track(this, prop);
      return target[prop]; // Reflect.get(target, prop);
    },
    set(target, prop, value) {
      // true / false // target[prop] = value;
      const res = Reflect.set(target, prop, value)
      trigger(this, prop);
      return res;
    }
  })

  return proxy;
} 


const obj = new Proxy({
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
  }
}, {
  get(target, prop) {
    console.log(`get ${prop}`);
    return Reflect.get(target, prop)
  },
  set(target, prop, value) {
    console.log(`set ${prop} = ${value}`)
    return Reflect.set(target, prop, value)
  }
})
