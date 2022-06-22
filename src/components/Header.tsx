import { ReactComponent as LogoSVG } from '../assets/logo.svg'
import Nav from './Nav/Nav'

function Header() {
  return (
    <>
      <header className='px-6 pt-12 mx-auto max-w-screen-md lg:pt-24'>
        <LogoSVG title='Ross Logan Web' />
      </header>   
      <nav className='sticky top-0 z-50'>
        <Nav />  
      </nav>  
    </>
  )
}

export default Header
