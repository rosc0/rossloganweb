import { useRef } from 'react'

import Header from './components/Header'
import About from './components/About/About'
import Capabilities from './components/Capabilities/Capabilities'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

import { NavProvider } from './context/NavContext'

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const capabilitiesRef = useRef<HTMLDivElement>(null)
  const myWorkRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sections = [
    {
      name: 'About',
      shortName: 'aboutMe',
      ref: aboutMeRef,
    },
    {
      name: 'Capabilities',
      shortName: 'capabilities',
      ref: capabilitiesRef,
    },
    {
      name: 'Work',
      shortName: 'myWork',
      ref: myWorkRef,
    },
    {
      name: 'Contact',
      shortName: 'contact',
      ref: contactRef,
    },
  ]

  return (
    <NavProvider>
      <Header sections={sections} />
      <main className='container mx-auto px-6 lg:px-0 relative'>
        <About aboutMeRef={aboutMeRef} />
        <Capabilities capabilitiesRef={capabilitiesRef} />
        <MyWork myWorkRef={myWorkRef} />
        <Contact contactRef={contactRef} />
      </main>
      <Footer />
    </NavProvider>
  )
}

export default App
