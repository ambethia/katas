function chain (fns) {
  const self = {}
  for (let fn in fns) {
    if (fns.hasOwnProperty(fn)) {
      self[fn] = function () {
        const here = {
          ...self,
          state: this.state,
          execute: () => here.state
        }
        let args = here.state === undefined ? arguments : [here.state, ...arguments]
        here.state = fns[fn](...args)
        return here
      }
    }
  }
  return self
}
