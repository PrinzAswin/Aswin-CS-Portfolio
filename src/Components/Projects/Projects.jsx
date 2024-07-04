import React, {useState} from 'react';
import'./projects.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projectItems=[
    {
      title: "Happy Rentals",
      discription: "MERN Stack Development",
      link: "/projects/HappyRentals",
      image: "./happyRentals.png"
    },
    {
      title: "Ashoppy.in",
      discription: "Design & Development",
      link: "/projects/Ashoppy.in",
      image: "./ashoppy.png"
    }
  ];

  const containerVariants1 = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.14,
            staggerChildren: 0.19,
        },
    },
  };

  const itemVariants1 = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [ isvisible, setIsVisible ] = useState(false);
  const [ mouseposition, setMousePosition ] = useState({x: 0, y: 0});
  const [ hoveredTitle, setHoveredTitle ] = useState('');

  const handleMouseOver = (e, image, link) => {
    setIsVisible(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
    setHoveredTitle(image, link);
  };

  const handleMouseMove = (e) => {
    if(isvisible){
      setMousePosition({x: e.clientX, y: e.clientY});
    }
  };
  
  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <>
      <motion.div 
      id='projects' 
      className="projectcontainer" 
      ref={ref} 
      variants={containerVariants1}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}>
        <h4 className='myprojects' style={{color:'black'}}>Recent projects</h4>
        {projectItems.map((items,index) => (
          <Link className='linkpart' to={items.link} key={index}>
            <motion.div 
            onMouseOver={(e) => handleMouseOver(e, items.image, items.link)} 
            onMouseMove={handleMouseMove} 
            onMouseOut={handleMouseOut} 
            className="projectbox" 
            variants={itemVariants1}>

            <hr className='ruler'/>
              <a href={projectItems.link} className='projectContents' key={index}>
                <div className="conrow">
                  <h1 className='protitle' style={{color:'black'}}>{items.title}</h1>
                </div>
                <div className="concol">
                  <p className='prodiscription' style={{color:'black'}}>{items.discription}</p>
                </div>
              </a>
            </motion.div>
          </Link>
        ))}
        <hr className='ruler' />
        {isvisible && (
          <div className="hover-box proj-box" style={{top: mouseposition.y,left: mouseposition.x}}>
            <img className='mini-title' src={hoveredTitle} alt='preview' />
            <div className="minilink"><Link to={hoveredTitle}>View</Link></div>
          </div>
        )}
      </motion.div>
    </>
  )
}

export default Projects