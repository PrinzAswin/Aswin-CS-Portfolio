import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom'; 
const Contact = () => {

  return (
    <>
      <div id='contact' className="contactpage">
        <div className="Title">
          <h1 className='title'><img className="logopic" src="./logo2.jpg" alt="#Aswin" />Let’s work</h1>
          <h1 className='title'>together</h1>
          <hr className='hr'/>
        </div>

        <div className="getintouch">
          <Link to='/' className="getintouchcontent">Get in touch</Link>
        </div>
        <div className="linkscontainer">
          <button className="links linkgap"><a  className='linka' href="mailto:asw2462002@gmail.com" target='_blank' >asw2462002@gmail.com</a></button>
          <button className="links"><a className='linka' href="https://api.whatsapp.com/send?phone=+916379150922&text=I impressed looking your Portfolio.Can you join with us!." target='_blank' >+91 63791 50922</a></button>
        </div>
        <span className="material-symbols-outlined leftarrow">south_west</span>
        <div className="footer">
          <div className="conclusion">
            <div className="credits">
             <h5 className='version'>VERSION</h5>
             <p>2024 &copy; Edition</p>
            </div>
            <div className="localtime">
             <h5 className="timetitle">LOCAL TIME</h5>
             <p className='time'>04:52 PM IND</p> 
            </div>
          </div>s
          <div className="socials">
            <h5 className='social_title'>SOCIALS</h5>
            <ul className='socialsul'>
              <li className='socialsli'><a href="https://www.linkedin.com/in/aswin-c-s-ba3753281/" target='_blank'>LinkedIn</a></li>
              <li className='socialsli'><a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target='_blank'>Naukri</a></li>
              <li className='socialsli'><a href="https://www.instagram.com/prinz_ash/" target='_blank'>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact