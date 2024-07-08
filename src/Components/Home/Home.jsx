import React, { useRef } from "react";
import {
motion,
useScroll,
useSpring,
useTransform,
useMotionValue,
useVelocity,
useAnimationFrame
} from "framer-motion";

import './Home.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { wrap } from '@motionone/utils';

const Home = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    type: "spring",
    damping: 50,
    stiffness: 300,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 3000], [0, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 1.8 * (delta / 3000);
    if (velocityFactor.get() < 0){
      directionFactor.current = -1;
    }
    else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
  });
  return (
    <>
      <Navbar />
      <main className='Homepage'> 
      <img className='Mypic' src='Images/Aswin.jpg' alt='Aswin' width='300' />
      <div className='leftsidecontent'>
        <div className='blockcontent'></div>
          <div className="Location" >Located in<br />Tamilnadu,<br />Madurai</div>
          <div className='globebg'><img className='globe_gif' src='Images/globe.gif' alt='Location' /> </div>
      </div> 
        
        <ul className="side-content" >
          <li><span className="material-symbols-outlined">south_east</span></li><br />
          <li className='side-content1' >Ui/Ux designer</li>
          <li className='side-content1' >& MERN Stack</li>
          <li className='side-content1' > Developer</li>
        </ul>
        <div className="sliderContainer">
          {/* <p
         > — Aswin cs • Ui/Ux designer & MERN Stack Developer — Aswin cs • Ui/Ux designer & MERN Stack Developer — Aswin cs • Ui/Ux designer & MERN Stack Developer — </p> */}
         <motion.div className='content-slider' style={{ x }}>
            <motion.span> — Aswin cs • Ui/Ux designer & MERN Stack Developer —</motion.span>
            <motion.span> Aswin cs • Ui/Ux designer & MERN Stack Developer —</motion.span>
            <motion.span> Aswin cs • Ui/Ux designer & MERN Stack Developer —</motion.span>
            <motion.span> Aswin cs • Ui/Ux designer & MERN Stack Developer —</motion.span>
            <motion.span> Aswin cs • Ui/Ux designer & MERN Stack Developer —</motion.span>
            <motion.span> Aswin cs • Ui/Ux designer & MERN Stack Developer —</motion.span>
         </motion.div>
        </div>
        </main>
        <About/>
        <Projects/>
        <Contact/>
    </>
  )
}
export default Home