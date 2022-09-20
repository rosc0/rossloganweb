import { FC } from 'react';

import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import Nav from './Nav/Nav';

import { SectionsProps } from '../App'

type HeaderProps = {
  sections: SectionsProps[];
};

const Header: FC<HeaderProps> = ({ sections }) => {
  return (
    <>
      <header className='px-6 pt-12 mx-auto max-w-screen-md lg:pt-24'>
        <LogoSVG title='Ross Logan Web' />
      </header>
      <nav className='sticky top-0 z-50'>
        <Nav sections={sections} />
      </nav>
    </>
  );
};

export default Header;
