import NavListItem from './NavListItem'

interface NavListProps {
  scrolledToNav: boolean,
  showMenu: boolean,
  sections: Array<{ id: string; name: string; }>,
}

function NavList( { scrolledToNav, sections, showMenu } : NavListProps ) {
  return (
    <ul className={`text-white ${showMenu ? (scrolledToNav ? 'block' : 'flex') : 'hidden lg:flex'}`}>
      {sections.map((section, index) => {
        return <NavListItem key={index} sectionId={section.id} sectionName={section.name} />
      })}
    </ul>
  )
}

export default NavList