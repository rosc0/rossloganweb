import { useState, useEffect } from 'react'

import Header from './components/Header'
import Nav from './components/Nav/Nav'
import About from './components/About'
import Capabilities from './components/Capabilities'
// import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const [scrolledToNav, setScrolledToNav] = useState<boolean>(false)

  const watchScroll = ():void => {
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop
    const element = document.getElementById('navBar');

    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY;
      setScrolledToNav(scrolled === topPos)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', watchScroll)
    return () => {
      window.removeEventListener('scroll', watchScroll)
    }
  }, [])

  return (
    <>
      <header className='container px-6 pt-6 mx-auto max-w-screen-md pt-0 lg:pt-24'>
        <Header />
      </header>   
      <nav className='sticky top-0 z-50'>
        <Nav scrolledToNav={scrolledToNav} />  
      </nav>   
      <main className='container mx-auto px-6 relative'>
        <About />
        <Capabilities />
        {/* <MyWork /> */}
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
