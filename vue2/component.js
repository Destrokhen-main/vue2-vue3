export const component = {
  data: () => ({
    A: 2,
    B: 10,
  }),
  methods: {
    addOneEqual() {
      this.A += 1;
    }
  },
  render($data) {
    return `${$data.A} + ${$data.B} = ${$data.A + $data.B}`;
  },
}
