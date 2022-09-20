import { useContext } from 'react';
import NavContext from '../../context/NavContext';

function HamburgerButton() {
  const { scrolledToNav, menuOpened, dispatch } = useContext(NavContext);

  const setMenuOpened = (): void => {
    dispatch({ type: 'TOGGLE_MENU_STATE' });
  };

  return (
    <button
      onClick={() => setMenuOpened()}
      className={`${scrolledToNav ? 'lg:hidden' : 'hidden'}`}
    >
      <div
        id='navIcon'
        className={`${
          menuOpened ? 'opened' : ''
        } w-8 h-5 rotate-0 duration-600 my-7`}
      >
        <span
          className={`block absolute h-0.5 bg-white rotate-0 duration-300 ${
            menuOpened ? 'top-1/2 w-0 left-1/2' : 'top-0 w-full left-0'
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 w-full bg-white left-0 top-1/2 duration-300 ${
            menuOpened ? 'rotate-45' : '0'
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 w-full bg-white left-0 top-1/2 duration-300 ${
            menuOpened ? '-rotate-45' : '0'
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 bg-white rotate-0 duration-300 ${
            menuOpened ? 'top-1/2 w-0 left-1/2' : 'w-full left-0 top-full'
          }`}
        ></span>
      </div>
    </button>
  );
}

export default HamburgerButton;
