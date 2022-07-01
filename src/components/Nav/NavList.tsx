import { useContext } from 'react'
import NavContext from '../../context/NavContext'

interface NavListProps {
  showMenu: boolean
  navBarRef: React.RefObject<HTMLDivElement>
  aboutMeRef: React.RefObject<HTMLDivElement>
  capabilitiesRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

function NavList({
  showMenu,
  navBarRef,
  aboutMeRef,
  capabilitiesRef,
  contactRef,
}: NavListProps) {
  const { scrolledToNav, dispatch } = useContext(NavContext)

  const sections = [
    {
      shortName: 'aboutMe',
      name: 'About',
    },
    {
      shortName: 'capabilities',
      name: 'Capabilities',
    },
    {
      shortName: 'contact',
      name: 'Contact',
    },
  ]

  const onNavigate = (navigateTo: string): void => {
    let refElement = undefined
    switch (navigateTo) {
      case 'aboutMe':
        refElement = aboutMeRef
        break
      case 'capabilities':
        refElement = capabilitiesRef
        break
      case 'contact':
        refElement = contactRef
        break

      default:
        break
    }

    if (refElement && refElement.current) {
      const navBarHeight = navBarRef.current?.clientHeight

      let titlePadding = 50
      if (navBarHeight) {
        titlePadding += navBarHeight
      }

      const scrollTo =
        refElement.current.getBoundingClientRect().top +
        window.scrollY -
        titlePadding

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      })
    }

    dispatch({ type: 'SET_MENU_CLOSED' })
  }

  return (
    <ul
      className={`text-white ${
        showMenu ? (scrolledToNav ? 'block' : 'flex') : 'hidden lg:flex'
      }`}
    >
      {sections.map((section, index) => {
        return (
          <li key={index} className='flex-1 text-center block py-2'>
            <button
              className={`w-full py-4 lg:rounded-sm hover:text-sky-500`}
              onClick={() => onNavigate(section.shortName)}
            >
              {section.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default NavList
