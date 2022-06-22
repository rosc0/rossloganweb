import { useEffect, useContext } from 'react'
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import NavList from './NavList'
import HamburgerButton from './HamburgerButton'

import NavContext from '../../context/NavContext'

function Nav() {

  const { scrolledToNav, menuOpened, dispatch } = useContext(NavContext)

  useEffect(() => {
    const watchScroll = (): void => {
      const scrolled = Math.ceil(
        document.body.scrollTop || document.documentElement.scrollTop
      )
      const element = document.getElementById('navBar')
  
      if (element) {
        const topPos = Math.ceil(
          element.getBoundingClientRect().top + window.scrollY
        )
        dispatch({ type: 'SET_SCROLLED_NAV', payload: scrolled === topPos })
        if (topPos !== scrolled) {
          dispatch({ type: 'SET_MENU_CLOSED' })
        }
      }
    }

    window.addEventListener('scroll', watchScroll)
    return () => {
      window.removeEventListener('scroll', watchScroll)
    }
  })

  return (
    <div
      id='navBar'
      className={`w-full mt-12 bg-charcoal-light border-opacity-0 border-b-2 border-t-2 border-t-charcoal border-b-sky-500 lg:mt-24 ${
        scrolledToNav
          ? 'shadow-2xl shadow-charcoal opacity-100 bg-charcoal-light border-opacity-20 transition-all ease-in-out duration-200'
          : ''
      }`}
    >
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='flex'>
          <div
            id='navLogo'
            className={`m-auto transition-opacity ease-in-out duration-200 ${
              scrolledToNav
                ? ' pr-6 py-4 w-6/12 lg:w-4/12 lg:py-0 opacity-100 h-auto'
                : 'w-0 opacity-0'
            }`}
          >
            <LogoSVG title='Ross Logan Web' />
          </div>

          <div
            className={`${
              scrolledToNav
                ? 'w-6/12 lg:w-8/12 text-right'
                : 'w-full text-center'
            }`}
          >
            <HamburgerButton />
            <NavList showMenu={!scrolledToNav && !menuOpened} />
          </div>
        </div>

        <div className='lg:hidden'>
          <NavList showMenu={scrolledToNav && menuOpened} />
        </div>
      </div>
    </div>
  )
}

export default Nav
