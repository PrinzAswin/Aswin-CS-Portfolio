import React,{useRef, useState} from 'react';
import { motion} from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  // magnet 1 
  const refer = useRef(null); 
  const [ position, setPosition ] = useState({x: 0, y: 0});  

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const {height, width, left, top} = refer.current.getBoundingClientRect();
    const middleX = clientX - (left + width/2)
    const middleY = clientY - (top + height/2)
    setPosition({x: middleX, y: middleY})
  }
  const reset = () => {
    setPosition({x: 0,y: 0})
  }
  const {x, y} = position;

  // margnet 2
  const refer2 = useRef(null);
  const [ positiontwo, setPositiontwo ] = useState({xx: 0, yy: 0});

  const handleMouse2 = (event) => {
    const { clientX, clientY } = event;
    const {height, width, left, top} = refer2.current.getBoundingClientRect();
    const middleX = clientX - (left + width/2)
    const middleY = clientY - (top + height/2)
    setPositiontwo({xx: middleX, yy: middleY})
  }
  const reset2 = () => {
    setPositiontwo({x: 0,y: 0})
  }
  const {xx, yy} = positiontwo;

  const navMenu = [
    {name: "About",link: "#about"},
    {name: "Projects",link: "#projects"},
    { name: "Contact", link: "#contact"}
  ];
  return (
    <>
      <div className='Nav'> 
        <motion.span className='codebyli'
          ref={refer}    
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{x, y}}
          transition={{ type: "spring", damping: 10, stiffness: 200, mass: .5}}>© Code by Aswin</motion.span>

        <motion.ul  
            className='pagesul'>
          {navMenu.map((item) => (
          <motion.li className='pagesli' key={item}>
            <motion.a href={item.link}>
              {item.name}
            </motion.a>
          </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  )
}

export default Navbar