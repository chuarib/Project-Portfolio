import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { Typewriter } from 'react-simple-typewriter';
import './Header.scss';

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <h1 className="big-text">Hello, <span>my name is </span><span className="chu">Chu</span></h1>
      <p className="small-text">I'm a <span className="chu">
        <Typewriter 
          loop
          cursor
          cursorStyle='_'
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1500}
          words={['Developer', 'Designer', 'Tattoo Artist', 'Father']}
        />
      </span></p>
    </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');