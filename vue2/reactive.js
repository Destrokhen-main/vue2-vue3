import { Dep } from "./dep.js";

export function reactive(data) {
  Object.keys(data).forEach((key) => {
    let internalValue = data[key];

    const dep = new Dep();

    Object.defineProperty(data, key, {
      get() {
        dep.depend();
        return internalValue
      },
      set(value) {
        internalValue = value;
        dep.notify();
      }
    })
  })
}
