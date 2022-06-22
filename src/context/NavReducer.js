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
    case 'SET_MENU_ITEM':
      return {
        ...state,
        pageLocation: action.payload,
      }
    case 'SET_TITLE_LOCATIONS':
      return {
        ...state,
        titleLocations: action.payload,
      }
    default:
      return state
  }
}

export default navReducer
