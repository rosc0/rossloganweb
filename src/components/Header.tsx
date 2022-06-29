import { ReactComponent as LogoSVG } from '../assets/logo.svg'
import Nav from './Nav/Nav'

interface HeaderProps {
  aboutMeRef: React.RefObject<HTMLDivElement>,
  capabilitiesRef: React.RefObject<HTMLDivElement>,
  contactRef: React.RefObject<HTMLDivElement>,
}

function Header({ aboutMeRef, capabilitiesRef, contactRef} : HeaderProps) {
  return (
    <>
      <header className='px-6 pt-12 mx-auto max-w-screen-md lg:pt-24'>
        <LogoSVG title='Ross Logan Web' />
      </header>   
      <nav className='sticky top-0 z-50'>
        <Nav aboutMeRef={aboutMeRef} capabilitiesRef={capabilitiesRef} contactRef={contactRef} />  
      </nav>  
    </>
  )
}

export default Header
