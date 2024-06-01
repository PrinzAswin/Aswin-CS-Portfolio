import React from 'react';
import { motion,  } from 'framer-motion';
import './Navbarforpro.css';

const Navbarforpro = () => {
 
  const variants = {
    visible: 
    {
      opacity: 1,
      y:0,
      transition: 
      {
        delay:0.5,
        duration:2,
        staggerChildren: .5,
        delayChildren:1,
      },
    },
      hidden:{opacity: 0,
        y:-5,
        transition: 
      {
        delay:0.5,
        duration:1,
        staggerChildren: .5,
        delayChildren:1,
      }
      }
  };

  const navMenu = [
    {name: "About",link: "#about"},
    {name: "Projects",link: "#projects"},
    {name: "Contact", link: "#contact"}
  ];
  return (
    <>
      <div className='Nav2'>
        <ul className='codebyul2'>
          <li className='codebyli2'>© Code by Aswin</li>
        </ul>

        <motion.ul className='pagesul2' initial="hidden" animate="visible" variants={variants} >
          {navMenu.map((item) => (
            <motion.li className='pagesli2' initial="hidden" animate="visible" variants={variants} key={item}><a className='a2' href={item.link}>{item.name}</a></motion.li>
          ))}
        </motion.ul>

      </div>
    </>
  )
}

export default Navbarforpro