import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useTheme } from './hooks/useTheme.js'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
