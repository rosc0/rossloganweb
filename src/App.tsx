import Header from './components/Header'
import About from './components/About/About'
import Capabilities from './components/Capabilities/Capabilities'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

import { NavProvider } from './context/NavContext'

function App() {
  return (
    <>
      <NavProvider>
        <Header /> 
      </NavProvider>
      <main className='container mx-auto px-6 lg:px-0 relative'>
        <About />
        <Capabilities />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
