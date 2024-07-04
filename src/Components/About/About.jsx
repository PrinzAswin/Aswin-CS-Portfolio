import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './about.css';
const About = () => {

const AboutContainer1 = [
  {AboutContent1 : "I'm"},
  {AboutContent1 : "a"},
  {AboutContent1 : "Web"},
  {AboutContent1 : "Designer"},
  {AboutContent1 : "&"},
  {AboutContent1 : "Developer"},
  {AboutContent1 : "with"},
  {AboutContent1 : "a"},
  {AboutContent1 : "knack"},
  {AboutContent1 : "for"},
  {AboutContent1 : "crafting"},
  
];

const AboutContainer2 = [
  {AboutContent2 : "engaging"},
  {AboutContent2 : "web"},
  {AboutContent2 : "applications."},
  {AboutContent2 : "My"},
  {AboutContent2 : "toolbox"},
  {AboutContent2 : "is"},
  {AboutContent2 : "brimming"},
  {AboutContent2 : "with"},
  {AboutContent2 : "the"}
  ];
  
  const AboutContainer3 = [
  
  {AboutContent3 : "latest"}, 
  {AboutContent3 : "frameworks"},
  {AboutContent3 : "and"}, 
  {AboutContent3 : "libraries,"},
  {AboutContent3 : "ensuring"},
  {AboutContent3 : "cutting-edge solutions."},
];

  const AboutContainer4 = [
  {AboutContent4 : "I blend"},
  {AboutContent4 : "functionality"}, 
  {AboutContent4 : "with fun,"}, 
  {AboutContent4 : "turning"},
  {AboutContent4 : "every"},
  {AboutContent4 : "project"}, 
  {AboutContent4 : "into"}, 
  {AboutContent4 : "a digital"}
  ];

  const AboutContainer5 = [
  {AboutContent5 : "adventure."}, 
  {AboutContent5 : "Let's"},
  {AboutContent5 : "make the"}, 
  {AboutContent5 : "web a"}, 
  {AboutContent5 : "delightful"}, 
  {AboutContent5 : "place"},
  {AboutContent5 : "together!"}
];
  
const designcontainer = [
  {
    id: "01",
    title : "Design",
    content : "With a solid track record in designing websites, I deliver strong and user-friendly digital designs."
  },
  {
    id: "02",
    title : "Development",
    content : "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Build with MERN stack." 
  },
  {
    id : "03",
    title : " ✦ The full package",
    content : "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-on projects."
  }
];

  const containerVariants1 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.04,
            staggerChildren: 0.05,
        },
    },
  };
  
  const containerVariants2 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.04,
            staggerChildren: 0.06,
        },
    },
  };

  const containerVariants3 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.04,
            staggerChildren: 0.06,
        },
    },
  };

  const containerVariant4 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.04,
            staggerChildren: 0.06,
        },
    },
  };

  const containerVariants5 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.04,
            staggerChildren: 0.06,
        },
    },
  };

  const itemVariants1 = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  const itemVariants2 = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  const itemVariants3 = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  const itemVariants4 = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  const itemVariants5 = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <>
    <section id="about" className='section'>
      <div className="aboutcontainer">
        <div className="aboutSection">
          <motion.div className="section-intro" ref={ref} variants={containerVariants1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}>
            {AboutContainer1.map((About, index) => (
                <motion.span key={index} className='aboutitems' variants={itemVariants1}>
                {About.AboutContent1}
                </motion.span>
            ))}
          </motion.div>

          <motion.div className="section-intro" ref={ref} variants={containerVariants2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}>         
            {AboutContainer2.map((About, index) => (
              <motion.span key={index} className='aboutitems' variants={itemVariants2}>
                {About.AboutContent2}
              </motion.span>
            ))}
          
        </motion.div>

        <motion.div className="section-intro" ref={ref} variants={containerVariants3}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}> 
            {AboutContainer3.map((About, index) => (
              <motion.span key={index} className='aboutitems' variants={itemVariants3}>
                {About.AboutContent3}
              </motion.span>
            ))}
        </motion.div>

        <motion.div className="section-intro" ref={ref} variants={containerVariant4}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}>
            {AboutContainer4.map((About, index) => (
              <motion.span key={index} className='aboutitems' variants={itemVariants4}>
                {About.AboutContent4}
              </motion.span>
            ))}
        </motion.div>

        <motion.div className="section-intro" ref={ref} variants={containerVariants5}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}>
            {AboutContainer5.map((About, index) => (
              <motion.span key={index} className='aboutitems' variants={itemVariants5}>
                {About.AboutContent5}
              </motion.span>
            ))}
        </motion.div>
      </div>
      <div className="about">
        <span className='abouttext'>The combination of my passion <br/> for design, code & interaction <br/>positions me in a unique place <br/> in the web design world.</span>
      </div>
    </div>
        <div className="aboutlink ">
          <Link to='/about' className='link'>About me</Link> 
        </div>
      
      <div className="designcontainer">
        {designcontainer.map((design, index) => (
          <div key={index} className="designcontent">
            <div className="design">
              <h4 className='designid'>
              {design.id}
              </h4>
              <hr className='horzontalrule'/>
              <h1 className='designtitle'>
              {design.title}
              </h1>
              <h2 className='designcontent'>
              {design.content}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About




