export function set({ commit }, { register }) {
  commit("set", register);
  return register;
}

export function open({ commit }) {
  commit("open");
}
