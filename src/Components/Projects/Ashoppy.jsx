import React,{useEffect, useState} from 'react';
import LoadingPageforprojects from '../LoadingPage/LoadingPageforprojects';
import Navbarforpro from '../../NavbarForProject/Navbarforpro';
import '../Navbar/Navbar.css';
import './projects.css';
import device from './device.png';
import website from './ashoppy.png';

const Ashoppy = () => {
  const [loading, setLoading ] =useState(true);
  const heading = "ASHOPPY.in"
  const ProjectDetails = [
    {
      title: "ROLE/SERVICE",
      detail: "Front-end Development"
    },
    {
      title: "CREDITS",
      detail: "Design: Aswin CS"
    },
    {
      title: "DURATION & YEAR",
      detail: "1 Months, 2023"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {loading ?  (<LoadingPageforprojects/>) : 
      (
        <>
            <Navbarforpro />
            <div className="mainProjectcontainer">
              <h1 className='ProjectHeader'>{heading}</h1>
            </div>
            <div className="projectDetails">
              {ProjectDetails.map((item,index) => (
              <div className="Detailscontainer" key={index}>
                <h5 className='detailstitle'>{item.title}</h5>
                <hr className='scale'/>
                <p className='details-detail'>{item.detail}</p>
            </div>
            ))}
            </div>
              <a className='livelink' href="https://prinzaswin.github.io/Ashoppy-E-commerce-Website-/" target='_blank' rel="noreferrer" >Live Link <span className="material-symbols-outlined">north_east</span></a>
            <div className="projectphoto">
              <div className="deviceimagecontainer">
                <img className='deviceimage' src={device} alt="device" />
                <img className='webimage' src={website} alt="web" />
              </div>
            </div>
        </>)
      }
      
    </>
  )
}

export default Ashoppy