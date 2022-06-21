import { ReactComponent as LogoSVG } from '../../assets/logo.svg'

import './Nav.css'

interface NavProps {
  scrolledToNav: boolean
}

function Nav({ scrolledToNav }: NavProps) {
  return (
    <div
      id='navBar'
      className={`w-full mt-12 bg-charcoal-light border-opacity-0 border-b-2 border-sky-500 lg:mt-24 ${
        scrolledToNav
          ? 'fixedToTop opacity-100 bg-charcoal-light border-opacity-20 transition-all ease-in-out duration-200'
          : ''
      }`}
    >
      <div className='container mx-auto flex'>
        <div
          id='navLogo'
          className={`m-auto opacity-0 pl-6 ${
            scrolledToNav ? 'w-4/12' : 'w-0'
          }`}
        >
          <LogoSVG title='Ross Logan Web' />
        </div>

        <div
          className={`pr-6 ${
            scrolledToNav ? 'w-8/12 text-right' : 'w-full text-center'
          }`}
        >
          <ul className='inline-block text-white'>
            <li className='inline-block py-6 px-3 lg:px-6'>About</li>
            <li className='inline-block py-6 px-3 lg:px-6'>Capabilities</li>
            {/* <li className='inline-block p-6'>My Work</li> */}
            <li className='inline-block py-6 pl-3 lg:pl-6'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
