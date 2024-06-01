import React from 'react';
import './skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Django', level: 'Intermediate' },
];

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const SkillsPage = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    return (
    <>
        <div className="skills-page">
            <motion.div
                ref={ref}
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <h2>My Skills</h2>
                <motion.ul>
                    {skills.map((skill, index) => (
                        <motion.li key={index} className="skill-item" variants={itemVariants}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-level">{skill.level}</div>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
        
    </>
    );
}

export default SkillsPage
