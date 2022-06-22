import { useContext } from 'react'
import NavContext from '../../context/NavContext'

import NavListItem from './NavListItem'

interface NavListProps {
  showMenu: boolean,
}

function NavList( { showMenu } : NavListProps ) {

  const { scrolledToNav } = useContext(NavContext) 

  const sections = [
    {
      id: 'about',
      name: 'About',
    },
    {
      id: 'capabilities',
      name: 'Capabilities',
    },
    {
      id: 'myWork',
      name: 'My Work',
    },
    {
      id: 'contact',
      name: 'Contact',
    },
  ] 

  return (
    <ul className={`text-white ${showMenu ? (scrolledToNav ? 'block' : 'flex') : 'hidden lg:flex'}`}>
      {sections.map((section, index) => {
        return <NavListItem key={index} sectionId={section.id} sectionName={section.name} />
      })}
    </ul>
  )
}

export default NavList