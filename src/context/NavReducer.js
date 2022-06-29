const navReducer = (state, action) => {
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
