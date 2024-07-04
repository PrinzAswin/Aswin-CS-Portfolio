import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingPage.css';

const LoadingPage = () => {
    const items = ["     ", "• Hello", "• வணக்கம்", "• ಸ್ವಾಗತ", "• नमस्ते", "• Bonjour", "• ようこそ", "      ","       "];
    const [currentIndex, setCurrentIndex] = useState(0);
    const variants= {
        closed:{
            clipPath: "circle(140% at 50% 90% )",
            transition: {
                duration: 2.5,
                type: "spring",
                repeat: 1,
                repeatType: "reverse",
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 575); 
        return () => clearInterval(intervalId);
    }, [items.length]);

    return ( 
        <motion.div className="LoadingScreen" animate={"closed"} variants={variants}>
            <div className="fade-text">
                {items[ currentIndex ]}
            </div>
        </motion.div>
    );
};

export default LoadingPage;


