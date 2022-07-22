import { useContext } from 'react'
import NavContext from '../../context/NavContext'

interface NavListInterface {
  showMenu: boolean
  navBarRef: React.RefObject<HTMLDivElement>
  sections: {
    name: string
    shortName: string
    ref: React.RefObject<HTMLDivElement>
  }[]
}

function NavList({ showMenu, navBarRef, sections }: NavListInterface) {
  const { scrolledToNav, activeSection, dispatch } = useContext(NavContext)
  const navBarHeight = navBarRef.current?.clientHeight || 0

  const onNavigate = (refElement: React.RefObject<HTMLDivElement>): void => {
    if (refElement && refElement.current) {
      let titlePadding = 50
      if (navBarHeight) {
        titlePadding += navBarHeight
      }

      const scrollTo = refElement.current.getBoundingClientRect().top + window.scrollY - titlePadding
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
              className={`w-full py-4 lg:rounded-sm hover:text-sky-500 text-md ${
                activeSection === section.shortName
                  ? 'bg-charcoal-lightest'
                  : ''
              }`}
              onClick={() => onNavigate(section.ref)}
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
