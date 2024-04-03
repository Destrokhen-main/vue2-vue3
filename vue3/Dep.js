import { track } from "./track.js";
import { trigger } from "./trigger.js";

/**
 * {
 *  [ref]: {
 *  'value' : [effect(), effetc2()]
 * },
 *  [reactive]: {
 *    'key' : [effect()]
 *  }
 * }
 *
 */

export class RefImp {
  constructor(value) {
    this._value = value;
  }

  get value() {
    track(this, 'value');
    return this._value;
  }

  set value(n) {
    this._value = n;
    trigger(this, 'value');
  }
}
