import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
const Home = () => {

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
          <p
         className='content-slider'> — Aswin cs • Ui/Ux designer & MERN Stack Developer — Aswin cs • Ui/Ux designer & MERN Stack Developer — Aswin cs • Ui/Ux designer & MERN Stack Developer — </p>
        
        </main>
        <About/>
        <Projects/>
        <Contact/>
    </>
  )
}
export default Home