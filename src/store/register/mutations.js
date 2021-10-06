export function set(state, register) {
  localStorage.setItem("register", register);
  state.current = register;
}

export function open(state) {
  state.open = true;
}
