import { createContext, useReducer } from 'react'
import navReducer from './NavReducer'

interface AppContextInterface {
  scrolledToNav: boolean;
  menuOpened: boolean;
  dispatch: any;
  pageLocation: string | null;
}

const initialState = {
  scrolledToNav: false,
  menuOpened: false,
  dispatch: null,
  pageLocation: null,
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
