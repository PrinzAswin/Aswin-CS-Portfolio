import React, {useEffect, useState } from 'react';
import LoadingPageforprojects from '../LoadingPage/LoadingPageforprojects';
import Navbarforpro from '../../NavbarForProject/Navbarforpro';
import '../Navbar/Navbar.css';
import './projects.css';
import device from './device.png';
import website from './HappyRentals.png';


const HappyRentals = () => {
  const ProjectDetails = [
    {
      title: "ROLE/SERVICE",
      detail: "✦ MERN Stack developent"
    },
    {
      title: "CREDITS",
      detail: "Developer: Aswin CS & Sasi dharan KM"
    },
    {
      title: "DURATION & YEAR",
      detail: "4 Months, 2024"
    },
  ];

  const OverviewContent1 = "The concept of happy rental is highlights their temporary nature and convenience for users without the commitment of ownership. Renters pay fees based on daily or weekly rates, and rental agreements specify terms such as duration, mileage limits, fuel policies, and insurance coverage. The reservation process involves customers providing details, choosing vehicles based on needs, and submitting required documents. At the end of the rental period, customers return the vehicle, and the company processes final payments.";

  const OverviewContent2 = "The existing system relies on manual, non-digital processes for managing rental car businesses, involving phone inquiries, physical documentation, cash transactions, and manual record-keeping. The return process includes physical confirmation with signed documentation.";
  
  const OverviewContent3 = "The proposed system introduces an online rental car platform, accessible through websites or mobile apps. It streamlines the entire process, from registration to vehicle return, offering user-friendly features such as digital agreements, online reservations, and electronic payments. The online system aims to enhance efficiency, accessibility, and user experience by leveraging digital technologies and reducing reliance on manual processes. It includes steps like user registration, online reservations, digital agreements, secure payments, and user feedback.";

  const TechnologiesUsed = [
    {
      technology: "FRONT-END",
      used: "React js"
    },
    {
      technology: "BACK-END",
      used: "Node js & Express js",
    },
    {
      technology: "DATA BASE",
      used: "Mongo DB"
    }
  ];

  const [loading, setLoading ] =useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (<LoadingPageforprojects/>) : 
        (
        <>
            <Navbarforpro />
            <div className="mainProjectcontainer">
              <h1 className='ProjectHeader'>HAPPY RENTALS</h1>
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
            <div className="projectoverviewcontainer">
              <h3 className='overviewtitle'>Project Overview</h3>
              <hr className='kodu'/>
              <div className="overviewcontent">
                <p className='overviewtext'>{OverviewContent1}</p>
                <p className='overviewtext'>{OverviewContent2}</p>
                <p className='overviewtext'>{OverviewContent3}</p>
              </div>
            </div>
            <div className="toolsused">
              <div className="technologyheader">
                <h3 className='technologytitle'>Technologies Used</h3>
              </div>
              <div className="technologycontent">
                {TechnologiesUsed.map((item,index) => (
                <div className="tectnologybox" key={index}>
                  <h5 className='technologyText'>{item.technology}</h5>
                  <hr className='scale'/>
                  <p className='technologyused'>{item.used}</p>
                </div>  
                ))}
              </div>
            </div>
            
        </>)
      }
      
      
    </>
  )
}

export default HappyRentals