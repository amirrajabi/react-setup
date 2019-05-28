import { MENU_OPEN } from "./types";

const initialState = {
  statusMenu: false
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_OPEN:
      return {
        statusMenu: !state.statusMenu
      };
    default:
      return state;
  }
}
