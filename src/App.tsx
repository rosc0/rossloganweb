import { useRef } from 'react'
import Header from './components/Header'
import About from './components/About/About'
import Capabilities from './components/Capabilities/Capabilities'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

import { NavProvider } from './context/NavContext'

function App() {
  
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const capabilitiesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <NavProvider>      
      <Header aboutMeRef={aboutMeRef} capabilitiesRef={capabilitiesRef} contactRef={contactRef} /> 
      <main className='container mx-auto px-6 lg:px-0 relative'>
        <About aboutMeRef={aboutMeRef} />
        <Capabilities capabilitiesRef={capabilitiesRef} />
        <Contact contactRef={contactRef} />
      </main>
      <Footer />
    </NavProvider>
  )
}

export default App
