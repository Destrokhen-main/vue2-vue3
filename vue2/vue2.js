import { reactive } from './reactive.js';
import { effect } from './effect.js';
import { component } from './component.js'

const data = component.data();
reactive(data);
effect(() => {
  console.log(component.render(data));
})

component.methods.addOneEqual.call(data);




