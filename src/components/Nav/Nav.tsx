import { useRef, useContext } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import NavList from './NavList'
import HamburgerButton from './HamburgerButton'

import NavContext from '../../context/NavContext'

interface NavProps {
  aboutMeRef: React.RefObject<HTMLDivElement>
  capabilitiesRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

function Nav({ aboutMeRef, capabilitiesRef, contactRef }: NavProps) {
  const { scrolledToNav, menuOpened, dispatch } = useContext(NavContext)
  const navBarRef = useRef<HTMLDivElement>(null)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const currentScrolled = Math.ceil(Math.abs(currPos.y))

      if (navBarRef.current) {
        const navTopPos = Math.ceil(
          navBarRef.current?.getBoundingClientRect().top + window.scrollY
        )

        dispatch({
          type: 'SET_SCROLLED_NAV',
          payload: currentScrolled === navTopPos,
        })
        if (navTopPos !== currentScrolled) {
          dispatch({ type: 'SET_MENU_CLOSED' })
        }
      }
    },
    [],
    undefined,
    false,
    100
  )

  return (
    <div
      id='navBar'
      ref={navBarRef}
      className={`w-full mt-12 bg-charcoal-light border-opacity-0 border-b-2 border-t-2 border-t-charcoal border-b-sky-500 lg:mt-24 ${
        scrolledToNav
          ? 'shadow-2xl shadow-charcoal opacity-100 bg-charcoal-light border-opacity-20 transition-all ease-in-out duration-1000'
          : ''
      }`}
    >
      <div className='container mx-auto px-6 lg:px-0'>
        <div className='flex'>
          <div
            id='navLogo'
            className={`m-auto transition-opacity ease-in-out duration-200 ${
              scrolledToNav
                ? ' pr-6 py-4 w-9/12 md:w-6/12 lg:w-4/12 lg:py-0 opacity-100 h-auto'
                : 'w-0 opacity-0'
            }`}
          >
            <LogoSVG title='Ross Logan Web' />
          </div>

          <div
            className={`${
              scrolledToNav
                ? 'w-3/12 md:w-6/12 lg:w-8/12 text-right'
                : 'w-full text-center'
            }`}
          >
            <HamburgerButton />
            <NavList
              navBarRef={navBarRef}
              aboutMeRef={aboutMeRef}
              capabilitiesRef={capabilitiesRef}
              contactRef={contactRef}
              showMenu={!scrolledToNav && !menuOpened}
            />
          </div>
        </div>

        <div className='lg:hidden'>
          <NavList
            navBarRef={navBarRef}
            aboutMeRef={aboutMeRef}
            capabilitiesRef={capabilitiesRef}
            contactRef={contactRef}
            showMenu={scrolledToNav && menuOpened}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
