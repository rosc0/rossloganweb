import { createContext, useReducer, Dispatch, FC, ReactNode } from 'react';
import navReducer from './NavReducer';

type NavContextType = {
  scrolledToNav: boolean;
  menuOpened: boolean;
  activeSection: string;
  dispatch: Dispatch<any>;
};

type ChildrenType = {
  children: ReactNode;
};

const initialState: NavContextType = {
  scrolledToNav: false,
  menuOpened: false,
  activeSection: '',
  dispatch: () => null,
};

const NavContext = createContext<NavContextType>(initialState);

export const NavProvider: FC<ChildrenType> = ({ children }) => {
  const [state, dispatch] = useReducer(navReducer, initialState);

  return (
    <NavContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
