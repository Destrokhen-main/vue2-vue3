import { effect } from "./effect.js";
import { component } from "./component.js";

const setup = component.setup();

effect(() => {
  console.log(component.render(setup));
})

setup.click();
