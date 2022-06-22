import { createContext, useReducer } from 'react'
import navReducer from './NavReducer'

interface AppContextInterface {
  scrolledToNav: boolean;
  menuOpened: boolean;
  dispatch: any;
}

const initialState = {
  scrolledToNav: false,
  menuOpened: false,
  dispatch: null,
}

const NavContext = createContext<AppContextInterface>(initialState);

export const NavProvider = ({ children } : any) => {
  

  const [state, dispatch] = useReducer(navReducer, initialState)

  return (
    <NavContext.Provider
      value={{
        ...state,
        dispatch,       
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export default NavContext