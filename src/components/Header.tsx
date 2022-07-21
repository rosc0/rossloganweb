import { ReactComponent as LogoSVG } from '../assets/logo.svg'
import Nav from './Nav/Nav'

interface HeaderInterface {
  sections: {
    name: string
    shortName: string
    ref: React.RefObject<HTMLDivElement>
  }[]
}

function Header({ sections }: HeaderInterface) {
  return (
    <>
      <header className='px-6 pt-12 mx-auto max-w-screen-md lg:pt-24'>
        <LogoSVG title='Ross Logan Web' />
      </header>
      <nav className='sticky top-0 z-50'>
        <Nav
          sections={sections}         
        />
      </nav>
    </>
  )
}

export default Header
