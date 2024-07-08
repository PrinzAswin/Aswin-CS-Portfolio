import React, { useRef, useEffect, useState } from 'react';
import './contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  
    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(() => setTime(new Date()),1000);

      return() => clearInterval(timerID);
    }, []);

    const refer = useRef(null);
  const [ position, setPosition ] = useState({x: 0,y: 0});

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
  return (
    <>
      <div id='contact' className="contactpage">
        <div className="Title">
          <h1 className='title'><img className="logopic" src="./logo2.jpg" alt="#Aswin" />Let’s work</h1>
          <h1 className='title togther'>together</h1>
          <hr className='hr'/>
        </div>

        <motion.div className="getintouch"
          ref={refer}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{x, y}}
          transition={{ type: "spring", damping: 50, stiffness: 500, mass: 4}}>
          <motion.p className="getintouchcontent"
          ref={refer}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{x, y}}
          transition={{ type: "spring", damping: 50, stiffness: 500, mass: 4}}>Get in touch</motion.p>
        </motion.div>
        <div className="linkscontainer">
          <button className="links linkgap"><a  className='linka' href="mailto:asw2462002@gmail.com" target='_blank' rel="noreferrer" >asw2462002@gmail.com</a></button>
          <button className="links"><a className='linka' href="https://api.whatsapp.com/send?phone=+916379150922&text=I impressed looking your Portfolio.Can you join with us!." target='_blank' rel="noreferrer" >+91 63791 50922</a></button>
        </div>
        <span className="material-symbols-outlined leftarrow">south_west</span>
        <div className="footer">
          <div className="conclusion">
            <div className="credits">
             <h5 className='version'>VERSION</h5>
             <p className='edition'>2024 &copy; Edition</p>
            </div>
            <div className="localtime">
             <h5 className="timetitle">LOCAL TIME</h5>
             <p className='time'>{time.toLocaleTimeString()} IND</p> 
            </div>
          </div>s
          <div className="socials">
            <h5 className='social_title'>SOCIALS</h5>
            <ul className='socialsul'>
              <li className='socialsli'><a href="https://www.linkedin.com/in/aswin-c-s-ba3753281/" target='_blank' rel="noreferrer">LinkedIn</a></li>
              <li className='socialsli'><a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target='_blank' rel="noreferrer">Naukri</a></li>
              <li className='socialsli'><a href="https://www.instagram.com/prinz_ash/" target='_blank' rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact