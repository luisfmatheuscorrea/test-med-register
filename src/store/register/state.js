const register = JSON.parse(localStorage.getItem("register"));
const initialState = register || [];

export default function () {
  return {
    current: initialState,
    open: false,
  };
}
