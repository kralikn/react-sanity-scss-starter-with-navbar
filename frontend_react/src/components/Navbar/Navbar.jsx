import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: 'easeInOut'
      }
    },
    hidden: {
      opacity: 0.85,
      x: 740,
      transition: {
        duration: 0.55,
        ease: 'easeInOut'
      }
    },
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src="" alt="" /> */}
        <h3>LOGO</h3>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'contact'].map((item) => (
          <li className='app__flex-center p-text' key={`link-${item}`}>
            {/* <div /> */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={variants}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar