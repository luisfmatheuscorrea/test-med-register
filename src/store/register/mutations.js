export function set(state, register) {
  localStorage.setItem("register", JSON.stringify(register));
  state.current = register;
}

export function open(state) {
  state.open = true;
}
