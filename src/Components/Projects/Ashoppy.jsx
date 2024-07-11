import React,{useEffect, useState} from 'react';
import LoadingPageforprojects from '../LoadingPage/LoadingPageforprojects';
import Navbarforpro from '../../NavbarForProject/Navbarforpro';
import '../Navbar/Navbar.css';
import './projects.css';
import device from './device.png';
import website from './ashopy.mkv';

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
      detail: "Designer: Aswin CS"
    },
    {
      title: "DURATION & YEAR",
      detail: "1 Months, 2023"
    },
  ];

  const OverviewContent1 = "Ashoppy.in is a dynamic and comprehensive online marketplace designed to cater to a wide array of product needs. From electronics and fashion to home essentials and more, Ashoppy.in aims to be the go-to destination for shoppers looking for quality products at competitive prices.";

  const OverviewContent2 = "Diverse Product Range: Ashoppy.in boasts an extensive catalog of products across various categories, ensuring that customers can find everything they need in one place.The website is designed with the user in mind, offering an intuitive and seamless shopping experience. Clean layouts, easy navigation, and clear categorization help users find products effortlessly. Ashoppy.in is optimized for performance across all devices. Whether accessing the site from a desktop, tablet, or smartphone, users will enjoy a consistent and responsive experience. The UI/UX design emphasizes engaging visuals and interactive elements that enhance the overall user experience, making shopping enjoyable and straightforward.";
  
  const OverviewContent3 = "The primary objective of Ashoppy.in is to create a user-friendly and highly responsive e-commerce platform that meets the diverse needs of its customers, providing them with a reliable, fast, and enjoyable shopping experience.";

  const TechnologiesUsed = [
    {
      technology: "FRONT-END",
      used: "HTML, CSS "
    },
    {
      technology: "BACK-END",
      used: "Javascript",
    },
    {
      technology: "DATA BASE",
      used: "N/A"
    }
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
                <video autoPlay loop className='webimage' src={website} alt="Ashoppy.in" />
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

export default Ashoppy