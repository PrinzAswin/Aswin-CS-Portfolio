import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingPageForProjects.css';

const LoadingPage = () => {
    const items = ["• Projects", "      ", "       "];
    const [currentIndex, setCurrentIndex] = useState(0);
    const variants= {
        open:{
            clipPath: "circle(150% at 30% 60% )",
            transition: {
                duration: 3,
                type: "spring"
            }
        },
        closed:{
            clipPath: "circle(180% at 30% 90% )",
            transition: {
                duration: 3,
                type: "spring"
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 1050); 
        return () => clearInterval(intervalId);
    }, [items.length]);

    return (
        <motion.div className="LoadingScreen2" animate = {"closed"} exit={"open"} variants={variants}>
            <div className="fade-text2">
                {items[ currentIndex ]}
            </div>
        </motion.div>
    );
};

export default LoadingPage;


