import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingPageForProjects.css';

const LoadingPage = () => {
    const items = ["     ","• Projects", "      "];
    const [currentIndex, setCurrentIndex] = useState(0);
    const variants= {
        closed:{
            clipPath: "circle(140% at 50% 90% )",
            transition: {
                duration: 2.5,
                type: "spring",
            }
        },
        opened:{
            clipPath: "circle(-140% at 90% 50%  )",
            transition: {
                duration: 2.5,
                type: "spring",
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 675); 
        return () => clearInterval(intervalId);
    }, [items.length]);

    return (
        <motion.div className="LoadingScreen2" animate = {"closed"} exit={"opened"} variants={variants}>
            <div className="fade-text2">
                {items[ currentIndex ]}
            </div>
        </motion.div>
    );
};

export default LoadingPage;


