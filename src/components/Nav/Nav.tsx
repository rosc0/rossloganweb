import { useRef, useEffect, useContext } from 'react'
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import NavList from './NavList'
import HamburgerButton from './HamburgerButton'

import NavContext from '../../context/NavContext'

function Nav() {

  const { scrolledToNav, menuOpened, dispatch } = useContext(NavContext)

  const navBarRef = useRef<HTMLDivElement>(null);

  // get top position of element
  const getTopOfElement = (element: Element) : number => {
    const navBarHeight = navBarRef.current?.clientHeight

    let titlePadding = 100
    if (navBarHeight) {
      titlePadding += navBarHeight
    }
    
    return Math.ceil(element.getBoundingClientRect().top + window.scrollY) - titlePadding
  }

  useEffect(() => {
    const navBar = document.getElementById('navBar')
    const aboutMe = document.getElementById('aboutMe')
    const capabilities = document.getElementById('capabilities')
    const myWork = document.getElementById('myWork')
    const contact = document.getElementById('contact')

    // watch scroll to check and set actions to scroll
    const watchScroll = (): void => {
      
      const scrolled = Math.ceil(document.body.scrollTop || document.documentElement.scrollTop)
      
      if (navBar) {
        const navTopPos = Math.ceil(navBar.getBoundingClientRect().top + window.scrollY)
        dispatch({ type: 'SET_SCROLLED_NAV', payload: scrolled === navTopPos })
        if (navTopPos !== scrolled) {
          dispatch({ type: 'SET_MENU_CLOSED' })
        }
      }
  
      if (aboutMe && capabilities && myWork && contact) {
        const aboutMeTopPos = getTopOfElement(aboutMe)
        const capabilitiesTopPos = getTopOfElement(capabilities)
        const myWorkTopPos = getTopOfElement(myWork)
        const contactTopPos = getTopOfElement(contact)

        dispatch({ type: 'SET_TITLE_LOCATIONS', payload: {
          aboutMe: aboutMeTopPos,
          capabilities: capabilitiesTopPos,
          myWork: myWorkTopPos,
          contact: contactTopPos,
        }})
  
        if (scrolled >= aboutMeTopPos && scrolled <= capabilitiesTopPos) {
          // about me
          dispatch({ type: 'SET_MENU_ITEM', payload: 'aboutMe' })
        } else if (scrolled >= capabilitiesTopPos && scrolled <= myWorkTopPos) {
          // capabilities
          dispatch({ type: 'SET_MENU_ITEM', payload: 'capabilities' })
        } else if (scrolled >= myWorkTopPos && scrolled <= contactTopPos) {
          // my work
          dispatch({ type: 'SET_MENU_ITEM', payload: 'myWork' })
        } else if (scrolled >= contactTopPos) {
          // contact
          dispatch({ type: 'SET_MENU_ITEM', payload: 'contact' })
        } else {
          dispatch({ type: 'SET_MENU_ITEM', payload: null })
        }
      }
      
    }

    window.addEventListener('scroll', watchScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', watchScroll)
    }
  }, [dispatch])

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
