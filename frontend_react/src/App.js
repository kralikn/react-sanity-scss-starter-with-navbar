import { Hero, Contact } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Contact />
    </div>
  )
}

export default App