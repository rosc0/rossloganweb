type State = {
  menuOpened: boolean,
  scrolledToNav: boolean,
}

enum ActionType {
  SET_SCROLLED_NAV = 'SET_SCROLLED_NAV',
  TOGGLE_MENU_STATE = 'TOGGLE_MENU_STATE',
  SET_MENU_CLOSED = 'SET_MENU_CLOSED',
}

type Action = {
  type: ActionType,
  payload: boolean
}

const navReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_SCROLLED_NAV':
      return {
        ...state,
        scrolledToNav: action.payload,
      }
    case 'TOGGLE_MENU_STATE':
      return {
        ...state,
        menuOpened: !state.menuOpened,
      }
    case 'SET_MENU_CLOSED':
      return {
        ...state,
        menuOpened: false,
      }
    default:
      return state
  }
}

export default navReducer
