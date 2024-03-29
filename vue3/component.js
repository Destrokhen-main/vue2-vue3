import { ref, reactive } from './reactive.js'

export const component = {
  setup() {
    const A = ref(1);
    const B = ref(3);
    const click = () => {
      A.value += 1;
    }

    const obj = reactive({
      a: 1,
      b: 2
    })

    return { A, B, obj, click }
  },
  render($setup) {
    return `${$setup.A.value} + ${$setup.B.value} = ${$setup.A.value + $setup.B.value}`
  }
}
